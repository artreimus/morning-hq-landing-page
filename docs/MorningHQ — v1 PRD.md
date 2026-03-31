# **MorningHQ — v1 PRD**

**Status:** In progress **PM Owner:** Shubham **Tech lead:** Arthur **Last updated:** March 2026

## **1\. Product vision**

PMs spend 30–40% of their week on information logistics, triaging Slack, reconstructing context, translating engineering updates, chasing follow-ups. None of this is product management. It is overhead.

MorningHQ eliminates that overhead. It reads everything across a PM's Gmail, Slack, Jira, Google Calendar, and Salesforce overnight and surfaces exactly what needs their attention each morning with context assembled and responses drafted. The PM opens one screen, acts on five items, and goes back to building.

The single metric that defines success at 90 days: 70% of active users open MorningHQ before they open Slack on four of five working days.

---

## **2\. The problem (four categories from the doc)**

**Collaboration and signal management** PMs ask questions in Slack. Answers arrive two days later in a different channel. The loop never closes. Customer follow-ups die silently. Critical emails are buried in noise. The answer to any customer question lives across a Jira ticket, a Slack thread, and a Confluence doc and the PM is the manual merge engine spending 15–20 minutes per question.

**Meeting intelligence** Pre-meeting prep is a 15–25 minute scavenger hunt before every customer call. Post-meeting, Zoom AI captures a summary and nothing happens next. No Jira ticket is created, no Slack message sent, no customer follow-up drafted. The summary sits in a tab and is forgotten.

**Internal-to-external translation** Engineering responds: "API rate limiter needs refactoring, blocked on upstream dependency, ETA 2 sprints." The PM cannot forward this to a customer. They manually translate it 10–20 times per week. Getting this wrong means over-promising or going silent — both erode trust.

**Deep work** Writing a PRD requires synthesizing customer requirements, competitive context, engineering constraints, and design input from six different tools and ten different conversations. Release notes require pulling Jira tickets, Confluence docs, Slack threads, and design docs manually, some churn customers intelligence from SFDC data. The work exists it is just scattered.

---

## **3\. Target user**

**Primary \- IC PM at a Series A–C B2B SaaS company (10–150 employees)**

This person wakes up to 20-30 messages across 2 timezones. They manage engineering, customer relationships, and leadership simultaneously. They have no chief of staff, no coordinator. They make their own buying decisions. 

Their exact Tuesday morning: open Slack at 7:45am. Still reading at 9:00am. First real work begins at 9:30am. **Best cognitive hours are gone.**

This is who we build for first. When they love it, they tell every PM they know. When their VP of Product sees it work, the team plan gets signed.

## **4\. Core features — P0 only (what ships in v1)**

These are the five features without which the product does not exist. Everything else waits.

**Morning brief** Scheduled at 6:30am in the PM's timezone. Reads all signals from the last 24 hours across Gmail and Slack. Runs the prioritization algorithm. Surfaces the top five items never more each with a one-line description and a suggested action. Below the five items: a single line reading "\[N\] other signals reviewed · updated \[time\]." Tappable to expand. Total time to clear the brief: under five minutes.

Done looks like: PM opens the app before opening Slack. Top five items are accurate. "\[N\] reviewed" line is always present. Zero items is shown explicitly, not as a blank screen.

**Commitment detection and tracking** Every message and email the PM sends or receives is scanned for commitment language — "I'll get back to you," "we're targeting end of month," "let me confirm with engineering." Detected commitments are auto-tracked with deadline, customer, and source. Status transitions automatically: Open → At Risk (72 hours before deadline) → Missed (deadline passed). A Missed commitment generates a draft acknowledgment and surfaces it in the next brief.

Done looks like: PM never manually logs a commitment. Precision above 80% — fewer than 1 in 5 tracked items is a false positive.

**Pre-meeting brief** Fifteen minutes before any calendar event with an external participant, a brief is assembled and waiting. Contents: open commitments for this account, last three interaction summaries, current Jira ticket status, Salesforce health score and renewal date, documents shared with this customer. Brief is ready within 60 seconds of the trigger. PM does not need to open any other tool to walk in prepared.

Done looks like: brief is present before 95% of customer meetings. PM opens it before at least 75% of those meetings.

**Response gap detection and draft generation** Any external Slack message or Gmail thread unanswered for more than 4 hours (Slack) or 24 hours (Gmail) surfaces in the next morning brief with a pre-drafted response attached. Draft enforces translation rules: no sprint numbers, no engineer names, no internal ticket IDs, no technical blocker language. If the draft contains a forbidden pattern, it is flagged for review — the PM cannot approve it without editing the flagged section.

Done looks like: draft generated within 5 seconds of gap being flagged. Forbidden pattern detection accuracy above 99% on known patterns. PM can approve and send directly from the brief without opening Gmail or Slack.

## **Feature 4.6 — Zoom meeting → action pipeline**

### **What it does**

When a customer meeting ends, MorningHQ reads the Zoom AI Companion notes, extracts every action item, customer question, and pending task, and surfaces them on a single screen for one-tap review and dispatch. The PM spends 4 minutes after a call instead of 30\. Nothing falls through.

### **Trigger**

Google Calendar event with an external participant reaches end time. System polls Zoom API for companion summary. Summary typically arrives within 5–15 minutes. If no summary is found within 30 minutes of meeting end, system flags in the next brief: "No Zoom notes found for \[Meeting Name\] — action items may not have been captured."

### **Extraction — three buckets**

LLM classifier reads the companion notes and produces:

**Assigns** — anything where the PM or their team was asked to do something, deliver something, or follow up. These become commitments and are tracked automatically.

**Customer questions** — anything the customer asked during the call that was not resolved in the meeting. These need a response.

**Pending tasks** — PM's own next steps that do not fall into the above two categories.

### **The post-meeting action screen**

Appears in the MorningHQ interface within 15 minutes of meeting end. If the meeting ended in the evening, it surfaces at the top of the next morning brief.

**Assigns section**

Each assign shows what was asked, who asked it, and two action options:

Create Jira ticket — pre-filled draft opens with summary, customer context, and suggested priority. PM reviews and confirms. Ticket created in connected Jira project.

Send to engineer — recipient selector opens. PM chooses a team member or Slack channel from a list ranked by interaction frequency, or searches by name. Message is pre-drafted on the PM's behalf: the ask, the customer context, and what is needed. PM reviews and sends.

PM can do both for the same item. One additional tap.

**Customer questions section**

Each unanswered question shown with a pre-drafted customer-appropriate response — no internal details, no jargon, no sprint references. PM approves and it sends via Gmail or Slack based on the customer's primary communication channel. If the question needs engineering input first, PM flags it as "needs answer from team" and it moves to the assigns section.

**Pending tasks section**

Added directly to the MorningHQ to-do list. Each task shows description, due date if mentioned in the notes, and the source meeting. PM edits if needed and confirms. Tasks surface in the morning brief daily until marked complete or dismissed.

---

### **Rules**

Nothing is sent, created, or logged without explicit PM confirmation. No exceptions in v1.

All customer-facing messages run through the forbidden pattern validator before being shown to the PM. Sprint numbers, engineer names, internal ticket IDs, and technical blocker language are blocked.

The Slack recipient selector shows team members the PM has messaged before, ranked by frequency. Channel list shows the PM's most active channels. Search available for anything not in the default list.

### **The to-do list**

Lightweight. Not a task manager. A numbered list inside MorningHQ that appears in the morning brief as a fourth section — visible only when items exist. Each item shows: task, source meeting or customer, days since created. Items older than 7 days are flagged. PM marks complete or dismisses. That is the entire feature.

### **Acceptance criteria**

Post-meeting screen appears within 15 minutes of meeting end for 90% of customer meetings with a Zoom companion summary available. Extraction identifies customer assigns with above 80% precision on a labeled test set. PM completes full dispatch flow in under 5 minutes. Zero items sent without explicit PM confirmation. Forbidden pattern check passes on 100% of customer-facing draft messages before they are shown.

### **Done looks like**

PM ends a 45-minute customer call. Within 15 minutes a screen appears with every action item extracted and pre-drafted. Two Jira tickets created. One Slack message sent to an engineer. One customer follow-up approved and sent. Three pending tasks added to the to-do list. Total time: 4 minutes. Previously: 25–35 minutes of manual work, with two of the four items forgotten entirely.

**Customer identity resolution** The system knows that jdoe@acmecorp.com in Gmail, @john\_doe in Slack, and John Doe in a calendar invite are the same person at the same account. This is the infrastructure that makes every other feature work. Without it, the brief shows disconnected signals. With it, the brief shows a coherent customer story.

Done looks like: auto-merge precision above 95%. Shared inboxes (support@, info@) are never merged into individual Person nodes. Ambiguous matches go to a one-tap review queue in settings — not in the brief.

---

## **5\. What we are not building in v1**

These are real requests that will come up. The answer is no until v1 is in the hands of five paying design partners.

We are not sending messages on the PM's behalf. The PM approves every send. One wrong automated message to an at-risk account ends the company's reputation faster than any feature we could ship.

We are not building a mobile app. A mobile-responsive web app covers the use case. We build native mobile when retention data justifies the engineering cost.

We are not building a task manager. MorningHQ surfaces what needs attention. The PM's existing Jira or Linear handles the tasks. Adding a task manager makes us another tool that requires manual input the exact problem we were built to solve.

## **6\. Success metrics**

**North star:** percentage of active users who open MorningHQ before opening Slack on four of five working days. Target: 70% at 90 days.

**Brief quality:** percentage of surfaced brief items the PM acts on (approve, respond, or schedule) versus snoozes or dismisses. Target: above 65%.

**Commitment capture:** percentage of commitments fulfilled before their deadline after MorningHQ is introduced versus baseline. Direction: up.

**Pre-meeting brief adoption:** percentage of customer meetings where PM opens the brief before the call. Target: above 75%.

**Draft approval rate:** percentage of generated response drafts the PM approves without editing the core content (minor edits are fine). Target: above 60%. Below 50% means the drafts are not good enough and the context is missing.

**Design partner retention:** all five design partners still active at 60 days. If any churn before 60 days, stop adding new users and fix the core loop.

---

## **7\. Build order — 12 weeks**

**Weeks 1–4 — prove the concept**

Arthur builds: Gmail OAuth and ingestion, Slack OAuth and ingestion, email-only entity resolution, commitment detection on Gmail, basic prioritization engine, brief UI with the five-item cap and the "N reviewed" line, draft response generation via Claude API, workspace row-level security before the second customer connects.

Shubham does: 10 PM discovery interviews, identify 3 design partners, write and test the draft generation system prompt, onboard first design partner in week 4\.

Ships: a PM connects Gmail and Slack, wakes up to a brief, acts on five items with pre-drafted responses. That is the product. That is what gets validated.

**Weeks 5–8 — make it real**

Arthur builds: Jira ingestion and ticket-to-account linking, Google Calendar ingestion and pre-meeting brief trigger, Salesforce account data ingestion, fuzzy entity resolution with Splink, Apache AGE graph migration, confidence gate (below 0.7 goes to review queue), commitment status transitions.

Shubham does: onboard 3 more design partners (5 total), weekly debriefs with each, refine draft generation based on real PM feedback, start YC application draft.

Ships: pre-meeting brief appearing automatically 15 minutes before customer calls. Jira tickets surfacing in customer context.

**Weeks 9–12 — ship MVP**

Arthur builds: sentiment trajectory tracking, feedback loop from PM actions to prioritization weights, mobile-responsive UI, brief generation performance under 60 seconds, basic analytics (open rate, action rate, return rate).

Shubham does: 5 design partners all paying something, capture 3 "the save" stories, submit YC application with real evidence, investor deck with design partner quotes.

Ships: the complete v1. A PM connects their tools once, wakes up to a brief that knows their customers, and acts on five items before 8am.

