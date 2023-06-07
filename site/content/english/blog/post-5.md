---
title: "K8sGPT and Backstage - even better together!"
date: 2023-05-06T16:22:16+06:00
image: "https://github-production-user-asset-6210df.s3.amazonaws.com/11465610/243298043-24591cc2-1290-4a3b-bf91-4d6e5b1a89cf.png"
description : "K8sGPT gives K8s Superpowers to everyone, with Backstage directly to the service owners"
draft: false
---

K8sGPT helps us to analyze current problems in the K8s cluster and with the help of AI it explains what the problem is and how it could be fixed.

In larger organizations you probably have a platform team and lots of application teams who don't have direct access to the cluster via the k8sgpt cli. However, your application teams still need the SRE superpowers of K8sGPT so that they can fix their problems easily. So how can you achieve this?

Backstage.io is a very popular platform for building developer portals, where teams get a holistic view on their services. It can show your service documentation, your github pipelines and also informations about your K8s resources.

A perfect place to show also the K8sGPT results which belong to your application!

So we at [suXess-IT](https://www.suxess-it.com/) are happy to announce that with our [backstage k8sgpt plugin](https://www.npmjs.com/package/@suxess-it/backstage-plugin-k8sgpt) you can integrate your K8sGPT results in your Backstage dev portal within a minute. So your dev teams get immediate access to the K8sGPT results which they need to take care about.

Just follow the [Readme](https://www.npmjs.com/package/@suxess-it/backstage-plugin-k8sgpt?activeTab=readme) or informations on our [github project](https://github.com/suxess-it/backstage-plugin-k8sgpt) . The current version is still alpha, so please use it at your own risk. If you find bugs or have feature requests please create an issue on https://github.com/suxess-it/backstage-plugin-k8sgpt .

Thanks to Aris and Alex who integrated [backstage support](https://github.com/k8sgpt-ai/k8sgpt-operator/pull/127) in K8sGPT, which will be available in the upcoming release v0.0.17.

For those who don't know about backstage.io yet, here is a good blog post what backstage.io can bring to K8s dev teams: https://backstage.io/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners
