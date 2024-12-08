---
title: "Analyseurs, anonymiseurs et scanner CVE"
date: 2019-10-17T11:22:16+06:00
image: "images/showcase/showcase-3.png"
description : "this is a meta description"
draft: false
---

Alors que nous clôturons notre premier mois d'open source, nous sommes heureux d'annoncer la sortie de quatre nouveaux analyseurs, d'un nouvel anonymiseur et d'un scanner CVE.

## Analyseurs
- NodeAnalzyer
- Analyseur de politique réseau
- DeploymentAnalyzer (analyseur de déploiement)
- CronJobAnalyzer

Nous espérons qu'avec ces nouveaux instruments, vous serez en mesure de mieux comprendre vos clusters Kubernetes. Je suis particulièrement intéressé à voir la communauté aider à construire l'analyseur NetworkPolicy pour qu'il soit encore meilleur ( S'il vous plaît, contribuez! voir plus [ici](https://github.com/k8sgpt-ai/k8sgpt/blob/main/CONTRIBUTING.md)).

## Anonymiseur

Le nouvel anonymiseur est un nouveau composant flexible qui nous permet de nous assurer que certains détails ne sont pas divulgués dans la sortie. C'est particulièrement utile lorsque vous voulez partager la sortie des analyseurs avec d'autres personnes, mais que vous ne voulez pas partager d'informations sensibles. Notamment lors de l'utilisation de la commande `--explain` et de l'envoi de données à AI pour analyse.

## Scanner CVE

Le scanner CVE est une nouvelle intégration qui vous permet de scanner votre cluster pour les CVE. 
C'est un excellent moyen de s'assurer que vous n'exécutez aucun logiciel vulnérable dans votre cluster. Nous espérons l'étendre dans le futur pour inclure plus de sources CVE et plus de scanners CVE. 
Pour l'instant, nous utilisons `Trivy` qui nous permet de scanner les problèmes critiques dans votre cluster.
Nous prenons le résultat et l'assainissons/priorisons grâce à l'IA pour vous aider à comprendre les problèmes critiques à corriger en premier.


## Politique de confidentialité

En réponse à un nombre croissant de demandes concernant l'utilisation de K8sGPT au travail, nous avons créé une politique de confidentialité simple [##],
nous avons créé une politique de confidentialité simple [ici](https://docs.k8sgpt.ai/reference/privacy/)


## Quelles sont les prochaines étapes ?

Nous avons un tas de nouvelles fonctionnalités en cours de développement, des modèles locaux aux opérations en grappe 😉
Rejoignez nos communautés [GitHub](https://github.com/k8sgpt-ai/k8sgpt) et Slack pour en savoir plus!