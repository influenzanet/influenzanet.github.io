---
sidebar_label: User Management Service
---

# User Management Service

The User management service is responsible for managing user accounts and authentication. 

User account contains information about a user (individual registered to the platform):

- AccountID : Uniquely identifies the account, and is used for login. Usually email address
- A list of profiles associated with the account.

Profiles define participants associated with the account. In the user service only potentially identifying fields are registered such as a nickname (could be a real name) and an avatar (an image name chosen by then participant which could indirectly give little information about the participant).

Profiles are not directly linked to the response data, but profile ID are mapped to a ParticipantID using a mapping operator in the [Study Service](/docs/survey-handbook/study-service/).

## User Account Data Structure

```ts
interface User {
    account: {
        type: string // Type of account 'email' for email authentication type
        accountID: string // ID of the account, used as login
        accountConfirmedAt: number // Timestamp of the confirmation of the account (when confirmation link is clicked in email sent on account creation )
        password: string // Hashed password (using Argon2)
        authType: string 
        preferredLanguage: string // Language code of the preferred to use as default in the web interface
    },
    roles: string[] // List of main roles of the account `PARTICIPANT`, `RESEARCHER`, `ADMIN`
    timesptamps: {

    },
    profiles: Profile[], // List of participants associated with the account
    contactPreferences: {
        	subscribedToNewsletter: bool,
            SendNewsletterTo: string[],
            subscribedToWeekly: bool
            receiveWeeklyMessageDayOfWeek: number
    }
    contactInfos: ContactInfo[]
}

interface Profile {
	_id?: string // ProfileID, used to 
	alias?: string // Participant's nickname
	consentConfirmedAt: number 
	createdAt: number
	avatarID?: string // Name of the image selected for this participant
	mainProfile: boolean // if True, this is the "main" profile, 
}

interface ContactInfo {
    _id: string // Id of contact, used in contactPreferences.SendNewsletterTo
    type: string // Kind of contact, 'email','phone'
    confirmedAt: number // Timestamp of verficiation, 0 = not verified
    confirmationLinkSentAt: number // Timestamp of the last verification email sent
    email?: string
    phone?: string
}

```

## User Service 

Features provided by the User Service

- Create and update then user account
- Validate account creation by sending confirmation email
- Validate user contact info by sending confirmation email
- Manage authentication tokens
- Manage password reset endpoint
- Manage temporary tokens

Within the service some time-based operations can be performed 

- Purging unverified users after a delay
- Send reminders to confirm account creation

## Golang Implementation

The golang implementation from https://github.com/influenzanet/user-management-service

## Service configuration

The user management service is configured using environment variables.

environment list is defined in https://github.com/influenzanet/user-management-service/blob/master/build/docker/example/user-management-env.list

### Database connexions

```bash
USER_DB_CONNECTION_STR=<mongodb-atlas-or-other-server-e.g.xxxx.mongodb.net/test?retryWrites=true&w=majority>
USER_DB_CONNECTION_PREFIX=<emtpy or +srv if atlas>
USER_DB_USERNAME=<db-username>
USER_DB_PASSWORD=<db-password>

GLOBAL_DB_CONNECTION_STR=<mongodb-atlas-or-other-server-e.g.xxxx.mongodb.net/test?retryWrites=true&w=majority>
GLOBAL_DB_CONNECTION_PREFIX=<emtpy or +srv if atlas>
GLOBAL_DB_USERNAME=<db-username>
GLOBAL_DB_PASSWORD=<db-password>

DB_TIMEOUT=30
DB_IDLE_CONN_TIMEOUT=45
DB_MAX_POOL_SIZE=8
DB_DB_NAME_PREFIX=
```

The Databases organization is described in [Architecture](../architecture)

`DB_DB_NAME_PREFIX` is used as the database prefix name, all databases managed by the service will use this value as a prefix.

`USER_DB_*` variables are required to connect to the user databases for all the managed instances. They define the credentials of an account of the MongoDB database server with read/write rights on all databases of the managed instances.

`GLOBAL_DB_*` variables are required to connect to the Global Database for this prefix. (containing the `instances` collection)

`*_CONNECTION_PREFIX` are used for the connexion schema, if you use domain based load balancer you can use '+srv' prefix, or leave empty.

### Authentication settings

- `TOKEN_EXPIRATION_MIN` : Token expiration delay (in minutes)
- `JWT_TOKEN_KEY`: Randomly generated base64 encoded key, should be secret
- `ARGON2_MEMORY`: Memory to use for Argon2 password hashing
- `ARGON2_ITERATIONS`: Number of iterations to used
- `ARGON2_PARALLELISM`: Number of threads to use to compute Argon2 password hashing

For details about Argon2, the golang package can give some help https://pkg.go.dev/golang.org/x/crypto/argon2 

### Service Connection

- `USER_MANAGEMENT_LISTEN_PORT`: value of the port the service will listen 

The User Service needs to connect to other services, host:port address must be specified as

- `ADDR_MESSAGING_SERVICE` : Messaging Service address
- `ADDR_LOGGING_SERVICE`: Logging Service address

### Parameters for User services behaviors

Duration and Lifetime

|          Variable                     |  Description                                            | Unit                        |
|-------------------------------------  |---------------------------------------------------------|-----------------------------|
| `CLEAN_UP_UNVERIFIED_USERS_AFTER`     | Number of seconds period to clean up unverified account | seconds                     |
| `VERIFICATION_CODE_LIFETIME`          | Lifetime of the verification code for a new account     | seconds                     |
| `INVITATION_TOKEN_LIFETIME`           | Token lifetime for Invitation message                   | *Duration (default: minutes)|
| `CONTACT_VERIFICATION_TOKEN_LIFETIME` | Token lifetime for Contact verification (email)         | *Duration (default: minutes)|

(*) Duration handles unit (golang time.Duration 'h' for hours, 'm' for minutes, 's' for seconds), if unit is not specified in the value the unit between brackets will be used.


- `NEW_USER_RATE_LIMIT`: Maximum number of new created account, during the signupRateLimitWindow (5 minutes)

#### WeekDay allocation

- `WEEKDAY_ASSIGNATION_WEIGHTS` : Weight of days

Each account is assigned to a random day of the week to receive the Weekly reminder/newsletter. To control the distribution of accounts on week days, it's possible to assign a weight to each day. The weight will be used to determine the probability of assigning a user to a given day.
The probability to assign a day is given by P(day) = W(day) / Sum(W(0)..W(7))
It's up to you to define the weights, you can use any positive integer. If Weight of a day is set to 0, the day is excluded and no account is assigned to it.
Each day is named by its 3 letter abbreviation (case insensitive) : Mon, Tue, Wed, Thu, Fri, Sat, Sun

Examples:

```bash
# Uniform assignment (each day has the same probability to be picked up), it's the default strategy if no value is given for this variable
WEEKDAY_ASSIGNATION_WEIGHTS=Mon=1,Tue=1,Wed=1,Thu=1,Fri=1,Sat=1,Sun=1

# Only Monday - Wednesday
WEEKDAY_ASSIGNATION_WEIGHTS=Mon=1,Tue=1,Wed=1,Thu=0,Fri=0,Sat=0,Sun=0

# Only Monday - Thursday, but Tuesday, Wednesday two chance to be selected
WEEKDAY_ASSIGNATION_WEIGHTS=Mon=1,Tue=2,Wed=2,Thu=1,Fri=0,Sat=0,Sun=0

``````
