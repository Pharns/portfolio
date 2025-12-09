# Cloud Control Pack (AWS)

**TL;DR:** Default-deny S3, GuardDuty evidence export, and scoped IAM patterns proving applied cloud security with compliance mapping. AI-assisted policy authoring and review accelerate delivery while keeping strict least-privilege.

Default-deny storage, evidence capture, and least-privilege IAM patterns for interviews and portfolio proof. AWS Cloud Practitioner is pending; CLI validation will be added after the exam.

## What’s Included
- **S3 private baseline**: Public access block, default encryption (SSE-S3), versioning, lifecycle for MPU cleanup and noncurrent versions, server access logging, TLS-only deny, and role-scoped bucket policy.
- **GuardDuty findings export**: Detector enabled, hardened S3 destination with public access block + encryption + versioning, TLS-only deny, GuardDuty write allow, ops read allow, sample-findings validation.
- **IAM least-privilege app role**: Scoped to a single S3 bucket and one Parameter Store path; TLS-only deny; optional KMS constraint for Param Store decryption.

## Why It Matters
- Shows applied cloud security: storage default-deny, evidence pipeline, and scoped IAM.
- Aligns with CIS storage/logging/IAM controls and NIST CSF (PR.AC, PR.DS, DE.CM).
- Ready to pair with AWS CP to demonstrate hands-on skill, not just the credential.

## Artifacts (public summaries)
- S3 baseline: commands and policy elements summarized here; full CLI run to be added post-exam.
- GuardDuty export: detector creation and S3 destination summary; sample-finding check pending CLI capture.
- IAM LP role: policy skeleton with TLS-only deny and scoped resources; optional KMS context restriction.

## Next Steps (post AWS CP)
- Capture CLI outputs for S3 baseline, GuardDuty export, and IAM LP role creation/validation.
- Add screenshots or code blocks with redacted ARNs/account IDs.
- Map each control to CIS/NIST in a short table for quick recruiter reference.
