# Installation

Influenzanet System backend is using Kubernetes as default deployment solution. We successfully deployed it on Google Kubernetes Engine, OpenShift and several others (OVH) or on minikube local installation.

To install it the simplest way is to use [Helm](https://helm.sh/).

Basic requirements to install the platform:

- A working Kubernetes cluster (minikube or PaaS)

On your computer:
- A configured kubectl (kubectl with configured kubeconfig to your cluster installation)
- Helm installed

Helm charts are here : https://github.com/influenzanet/cluster-management

The installation is described in [Influenzanet setup Guide](https://github.com/influenzanet/influenzanet-setup-guide) for [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)



