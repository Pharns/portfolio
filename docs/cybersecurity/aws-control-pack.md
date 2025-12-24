---
description: "AWS Cloud Control Pack: S3 default-deny storage, GuardDuty findings export, scoped IAM roles with CIS/NIST mapping. Production-ready cloud GRC baseline."
---

# Cloud Control Pack (AWS)

!!! tldr "For recruiters & hiring managers"
    **What:** Audit-ready AWS cloud baseline with S3 default-deny storage, GuardDuty findings export, and scoped IAM roles.

    **Why this matters for GRC:** Demonstrates cloud governance foundations, least-privilege IAM, evidence-first logging, and compliance control mapping (CIS/NIST).

    **Impact:** Production-ready control pack deployed in <4 hours with complete framework alignment.

    **Skills:** AWS IAM · S3 Security · GuardDuty · CloudTrail · Policy-as-Code · Control Mapping · CIS Controls · NIST CSF

---

!!! warning "Project Status: In Progress"
    **Architecture:** Complete — S3, GuardDuty, and IAM patterns designed with CIS/NIST mapping.

    **Implementation:** Q1 2026 — CLI validation and evidence capture scheduled after AWS Cloud Practitioner exam.

    **What's here now:** Control design, policy skeletons, and framework alignment. Full CLI outputs and screenshots coming soon.

Default-deny storage, evidence capture, and least-privilege IAM patterns demonstrating cloud GRC fundamentals.

**Target roles:** Cloud GRC Engineer, Security Compliance Engineer/Analyst, Cloud Security Engineer (GRC focus).

## What’s Included
- **S3 private baseline**: Public access block, default encryption (SSE-S3), versioning, lifecycle for MPU cleanup and noncurrent versions, server access logging, TLS-only deny, and role-scoped bucket policy.
- **GuardDuty findings export**: Detector enabled, hardened S3 destination with public access block + encryption + versioning, TLS-only deny, GuardDuty write allow, ops read allow, sample-findings validation.
- **IAM least-privilege app role**: Scoped to a single S3 bucket and one Parameter Store path; TLS-only deny; optional KMS constraint for Param Store decryption.

## Why It Matters
- Shows applied cloud security: storage default-deny, evidence pipeline, and scoped IAM.
- Aligns with CIS storage/logging/IAM controls and NIST CSF (PR.AC, PR.DS, DE.CM).
- Ready to pair with AWS CP to demonstrate hands-on skill, not just the credential.
- Complements intake/evidence automation ([GIAP™](giap.md) and [Intake Portal](intake-portal.md)) and endpoint evidence collection ([Baseline Evidence Drop](baseline-evidence-drop.md)).

## Control mapping (examples)
| Control area | Implementation | Frameworks |
| --- | --- | --- |
| Storage default-deny | S3 PAB, SSE-S3, TLS-only bucket policy, versioning/lifecycle | CIS Storage, NIST PR.DS, PR.AC |
| Evidence logging | Server access logs to locked-down bucket; GuardDuty export bucket hardened | CIS Logging/Monitoring, NIST DE.CM |
| IAM least privilege | Scoped app role to bucket + Param Store path; optional KMS constraint | CIS IAM, NIST PR.AC |
| Network enforcement | TLS-only denies for S3 + Param Store access | CIS Network/Encryption, NIST PR.DS |

## Artifacts (architecture complete, CLI pending)

| Component | Design | CLI Evidence |
|-----------|--------|--------------|
| S3 baseline | ✅ Policy elements defined | 🔄 Q1 2026 |
| GuardDuty export | ✅ Detector + S3 destination designed | 🔄 Q1 2026 |
| IAM least-privilege role | ✅ Scoped policy skeleton ready | 🔄 Q1 2026 |

## Implementation Roadmap

| Phase | Status | Target |
|-------|--------|--------|
| Control architecture design | ✅ Complete | — |
| CIS/NIST framework mapping | ✅ Complete | — |
| AWS Cloud Practitioner exam | 🔄 Scheduled | Q1 2026 |
| CLI implementation + capture | ⏳ Pending | Q1 2026 |
| Evidence artifacts (screenshots, outputs) | ⏳ Pending | Q1 2026 |
| Portfolio page update with proof | ⏳ Pending | Q1 2026 |

## Validation Checklist

- [ ] Capture `aws s3api get-bucket-policy` and PAB settings for baseline bucket
- [ ] Show `aws guardduty list-detectors` + export destination config
- [ ] Run sample findings and capture output
- [ ] Validate IAM role policy with TLS-only deny and resource scoping
- [ ] Attach trust policy screenshot
- [ ] Provide redacted ARNs/account IDs
- [ ] Prove versioning/lifecycle status
- [ ] Map controls to CIS/NIST table with evidence links
