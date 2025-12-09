# Cloud Control Pack (AWS)

**TL;DR:** Lock down AWS storage by default, export security alerts safely, and use narrow IAM roles. Shows cloud control discipline with clear compliance mapping. Built quickly with AI checks but kept least-privilege.

Default-deny storage, evidence capture, and least-privilege IAM patterns for interviews and portfolio proof. AWS Cloud Practitioner is pending; CLI validation will be added after the exam.

**Target roles:** Cloud GRC Engineer, Security Compliance Engineer/Analyst, Cloud Security Engineer (GRC focus).

## What’s Included
- **S3 private baseline**: Public access block, default encryption (SSE-S3), versioning, lifecycle for MPU cleanup and noncurrent versions, server access logging, TLS-only deny, and role-scoped bucket policy.
- **GuardDuty findings export**: Detector enabled, hardened S3 destination with public access block + encryption + versioning, TLS-only deny, GuardDuty write allow, ops read allow, sample-findings validation.
- **IAM least-privilege app role**: Scoped to a single S3 bucket and one Parameter Store path; TLS-only deny; optional KMS constraint for Param Store decryption.

## Why It Matters
- Shows applied cloud security: storage default-deny, evidence pipeline, and scoped IAM.
- Aligns with CIS storage/logging/IAM controls and NIST CSF (PR.AC, PR.DS, DE.CM).
- Ready to pair with AWS CP to demonstrate hands-on skill, not just the credential.
- Complements intake/evidence automation ([GIAP](giap.md) and [Intake Portal](intake-portal.md)) and endpoint evidence collection ([Baseline Evidence Drop](baseline-evidence-drop.md)).

## Control mapping (examples)
| Control area | Implementation | Frameworks |
| --- | --- | --- |
| Storage default-deny | S3 PAB, SSE-S3, TLS-only bucket policy, versioning/lifecycle | CIS Storage, NIST PR.DS, PR.AC |
| Evidence logging | Server access logs to locked-down bucket; GuardDuty export bucket hardened | CIS Logging/Monitoring, NIST DE.CM |
| IAM least privilege | Scoped app role to bucket + Param Store path; optional KMS constraint | CIS IAM, NIST PR.AC |
| Network enforcement | TLS-only denies for S3 + Param Store access | CIS Network/Encryption, NIST PR.DS |

## Artifacts (public summaries)
- S3 baseline: commands and policy elements summarized here; full CLI run to be added post-exam.
- GuardDuty export: detector creation and S3 destination summary; sample-finding check pending CLI capture.
- IAM LP role: policy skeleton with TLS-only deny and scoped resources; optional KMS context restriction.

## Validation checklist (post AWS CP)
- [ ] Capture `aws s3api get-bucket-policy` and PAB settings for baseline bucket.
- [ ] Show `aws guardduty list-detectors` + export destination config; include sample findings run.
- [ ] Validate IAM role policy with TLS-only deny and resource scoping; attach trust policy screenshot.
- [ ] Provide redacted ARNs/account IDs; prove versioning/lifecycle status.
- [ ] Map controls to CIS/NIST table above in the case study.

## Next Steps (post AWS CP)
- Capture CLI outputs for S3 baseline, GuardDuty export, and IAM LP role creation/validation.
- Add screenshots or code blocks with redacted ARNs/account IDs.
- Map each control to CIS/NIST in a short table for quick recruiter reference.
