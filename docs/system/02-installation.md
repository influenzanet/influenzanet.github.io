# Installation

## Kubernetes Installation

The Influenzanet System backend uses Kubernetes as the default deployment solution. We successfully deployed it on Google Kubernetes Engine, OpenShift and some others (OVH) or on minikube local installation.

The easiest way to install To install is to use [Helm](https://helm.sh/).

Basic requirements for installing the platform:

- A running Kubernetes cluster (minikube or PaaS)

On your computer:

- A configured kubectl (kubectl with configured kubeconfig to your cluster installation)
- Helm installed

Helm charts can be found here : https://github.com/influenzanet/cluster-management

The installation is described in the [Influenzanet setup Guide](https://github.com/influenzanet/influenzanet-setup-guide) for [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)

## Other solutions

In principle, the system does not depend on an orchestration solution, it's possible to run each service manually or to use another solution like Docker Compose or Swarm but we dont not provide template for this yet.