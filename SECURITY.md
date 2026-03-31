# Security Policy

## Scope

This repository contains the source for the Agile Vibe Coding Manifesto website. The site is a static site deployed via GitHub Pages. Relevant security concerns include vulnerabilities in npm build dependencies, malicious content injected via PRs, and compromised GitHub Actions workflows.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Use GitHub's private vulnerability reporting feature:

**[Report a vulnerability](https://github.com/Agile-Vibe-Coding/Manifesto/security/advisories/new)**

Please include: the type of issue, files or components affected, steps to reproduce, proof-of-concept if applicable, and potential impact.

## What to Expect

1. Acknowledgement within 3 business days.
2. Investigation with regular progress updates.
3. Notification when the fix is released.
4. Credit in the security advisory if you wish.

## Dependency Vulnerabilities

If you discover a vulnerability in one of our dependencies, please report it to the upstream maintainer of that package first. If the vulnerability directly affects users of this site, please also follow the process above. We use Dependabot to monitor dependencies automatically and will act on alerts promptly.
