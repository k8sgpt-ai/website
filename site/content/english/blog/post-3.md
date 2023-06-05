---
title: "Analyzers, Anonymizers, and CVE Scanner"
date: 2023-04-04T20:22:16+06:00
image: "images/showcase/amazed.jpeg"
description : "We drop four new analzyers, a new anonymizer and a CVE scanner."
draft: false
---

As we close our first month of open source, we're excited to announce the release of four new analyzers, a new anonymizer and a CVE scanner.

## Analyzers
- NodeAnalzyer
- NetworkPolicyAnalyzer
- DeploymentAnalyzer
- CronJobAnalyzer

We hope that with these new instruments, you'll be able to better understand your Kubernetes clusters. I am particularly interested to see the community help build out the NetworkPolicy analyzer to be even better ( Please do contribute! see more [here](https://github.com/k8sgpt-ai/k8sgpt/blob/main/CONTRIBUTING.md)).

## Anonymizer

The new anonymizer is a flexible new component that lets us ensure certain details are not leaked in the output. This is particularly useful for when you want to share the output of the analyzers with others, but don't want to share sensitive information. Namely when using the `--explain` command and uploading data to AI for analysis.

## CVE Scanning

The CVE scanner is a new integration that allows you to scan your cluster for CVEs. 
This is a great way to ensure that you're not running any vulnerable software in your cluster. We hope to expand this in the future to include more CVE sources and more CVE scanners. 
For now we are using `Trivy` which enables us to scan for critical issues in your cluster.
We take the output and sanitise/prioritise it through AI to help you understand the critical issues to fix first.


## Privacy policy

In response to increasing levels of enquiries around using K8sGPT at work,
we have created a simple privacy policy [here](https://docs.k8sgpt.ai/reference/privacy/)


## What's next?

We have a bunch of new features in development from local models to in-cluster operations 😉
Join our [GitHub](https://github.com/k8sgpt-ai/k8sgpt) and Slack communities to find out more!
