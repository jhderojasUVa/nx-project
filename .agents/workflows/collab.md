---
description: Trigger the developer-tester collaboration loop to automate a feature's implementation and testing.
---

When the user gives the `/collab [feature description]` command, you will act as the **Coordinator** and orchestrate the two virtual agents (`developer` and `tester`) defined in `antigravity.yaml`. 

You must strictly execute the following steps in sequence to deliver the user's requested feature:

1. **Phase 1 (Developer - Implementation):**
   - Take the user's feature description and write the implementation code.
   - You must make the necessary file creations/updates using your tools.
   - Briefly summarize what was implemented as the *Developer*.

2. **Phase 2 (Tester - Validation):**
   - Switch entirely to the mindset of a QA engineer.
   - Write comprehensive unit tests for the feature that the Developer just implemented using Vitest.
   - You must make the necessary file creations/updates using your tools.
   - Run the tests in the terminal (`npx nx test [project-name]` or the specific test file) to validate the behavior.
// turbo
   - Wait for the test command to finish and provide the testing results as the *Tester*.

3. **Phase 3 (Developer - Fixes):**
   - If the tester's terminal output showed NO ERRORS, simply declare "No fixes needed" and move to Phase 4.
   - If there were errors, switch back to the *Developer* perspective. Analyze the test failures and update the implementation code to fix them.

4. **Phase 4 (Tester - Final Confirmation):**
   - If fixes were made in Phase 3, run the test command one more time.
// turbo
   - Wait for the new results.
   - Conclude the workflow by reporting to the user that the feature is implemented and validated successfully.

Execute these phases automatically without asking for permission between steps, pausing only to retrieve test results or run necessary commands.
