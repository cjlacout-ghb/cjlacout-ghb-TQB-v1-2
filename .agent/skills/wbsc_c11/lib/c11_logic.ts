/**
 * Utility: Convert innings display (7.1, 7.2) to total outs
 * 3 outs = 1 inning. .1 = 1/3, .2 = 2/3.
 */
export function inningsToOuts(innings: string | number): number {
    const value = typeof innings === 'string' ? parseFloat(innings) : innings;
    if (isNaN(value) || value < 0) return 0;
    const whole = Math.floor(value);
    const outs = Math.round((value - whole) * 10);
    return whole * 3 + outs;
}

/**
 * WBSC C11 Recursive Resolution Engine
 * Implements the "Waterfall Rule": Once a tie progresses to a higher level (e.g. TQB),
 * it never returns to Head-to-Head.
 */
export function resolveTieWaterfall(
    tiedTeams: any[],
    allGames: any[],
    criteriaLevel: number, // 1: H2H, 2: TQB, 3: ER-TQB
    context: any
): any[] {
    if (tiedTeams.length <= 1) return tiedTeams;

    // Filter games to ONLY those between the tied teams
    const tiedIds = new Set(tiedTeams.map(t => t.id));
    const relevantGames = allGames.filter(
        g => tiedIds.has(g.teamAId) && tiedIds.has(g.teamBId)
    );

    let subgroups: any[][] = [];

    // Logic based on criteriaLevel...
    // [Implementation details would follow the patterns in calculateRankings]

    // IF SEPARATION OCCURRED:
    // Recursively resolve each subgroup starting from NEXT criteria level
    const result: any[] = [];
    for (const group of subgroups) {
        if (group.length > 1) {
            result.push(...resolveTieWaterfall(group, allGames, criteriaLevel + 1, context));
        } else {
            result.push(group[0]);
        }
    }

    return result;
}
