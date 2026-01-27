---
name: wbsc_c11
description: Expert logic and rules for implementing WBSC Rule C11 (Softball) tie-breaking, including the recursive Waterfall Rule.
---

# WBSC Rule C11: Tie-Breaking (Softball)

This skill provides the definitive logic for resolving ties in Softball tournaments according to the World Baseball Softball Confederation (WBSC) Tournament Regulations.

## Core Hierarchy

When teams have identical win-loss records, apply these criteria in strict sequential order:

1.  **Head-to-Head (H2H)**: Results of games played *only* between the tied teams.
2.  **Team Quality Balance (TQB)**: 
    *   `Formula: (Runs Scored / Innings at Bat) – (Runs Allowed / Innings on Defense)`
3.  **Earned Runs TQB (ER-TQB)**: 
    *   `Formula: (Earned Runs Scored / Innings at Bat) – (Earned Runs Allowed / Innings on Defense)`
4.  **Highest Batting Average**: Compare averages in games between tied teams.
5.  **Coin Toss**: Last resort.

## The Waterfall Rule (Separation Logic)

The "Waterfall Rule" is the most critical part of the WBSC Softball regulation. It dictates how ties are handled when a criterion partially resolves a group.

### The Rule:
> *Tie-breaking criteria are applied in a sequential order. Once a tie moves to a subsequent step (like TQB), the calculation is based ONLY on the games played between the teams currently involved in that specific tie. The logic moves forward and NEVER returns to Step 1.*

### How to Implement (Recursive Logic):
1.  **Identify the Tied Group**: Filter all games to include only those between teams in the group.
2.  **Apply Current Step**: (e.g., Step 2: TQB).
3.  **Check for Separation**:
    *   If **all** teams are separated: Settlement reached.
    *   If **none** are separated (all still tied): Move the *entire group* to the **Next Step** (e.g., Step 3: ER-TQB).
    *   If **some** are separated (e.g., Team A is #1, but B and C remain tied):
        *   Place Team A.
        *   Take the remaining tied teams (B & C) and move them to the **Next Step** (e.g., Step 3).
        *   **CRITICAL**: Do NOT return to Step 1 for B & C.

## Best Practices (Softball Context)

-   **Innings Format**: Always store innings as "outs" internally for precision. Softball uses 3 outs per inning. Format `7.1` means `7 + 1/3` innings.
-   **Localized Stats**: When resolving a tie, "Innings at Bat" and "Runs Scored" must be calculated *only from games between the tied teams*. Do not use the tournament totals.
-   **TIE_TOLERANCE**: Use a tolerance of `0.0001` when comparing TQB values to account for floating-point math.

---

## Resources

- [c11_logic.ts](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/wbsc_c11/lib/c11_logic.ts): Recursive engine template.
- [rule_c11.md](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/wbsc_c11/resources/rule_c11.md): Official regulation text.
