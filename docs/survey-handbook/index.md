---
sidebar_position: 0
---
# Influenzanet Survey System

The Influenzanet Survey System is a set of tools used to organize and manage data collection for Influenzanet platforms.

The scope of this documentation is to describe the 2 main components of this system

- [Survey Engine](./survey-engine/) : on the client side (e.g. participant's browser), running a survey and collecting data from a [Survey Definition](./general/concepts#survey-definition)
- [Study Service](./study-service/) : on the server side (running in the platform's server), managing surveys, participants and handling study events

Some components are used by the survey system but not in the scope of this documentation (yet):
- Messaging component, handled by [Messaging Service](https://github.com/influenzanet/messaging-service)
