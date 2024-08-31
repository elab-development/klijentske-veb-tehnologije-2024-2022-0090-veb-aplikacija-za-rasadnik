interface TeamMember {
    name: string;
    role: string;
    bio: string;
}

export default class AboutPageInfo {
    private companyInfo: string;
    private mission: string;
    private vision: string;
    private team: TeamMember[];

    constructor(companyInfo: string, mission: string, vision: string, team: TeamMember[]) {
        this.companyInfo = companyInfo;
        this.mission = mission;
        this.vision = vision;
        this.team = team;
    }

    getCompanyInfo(): string {
        return this.companyInfo;
    }

    getMission(): string {
        return this.mission;
    }

    getVision(): string {
        return this.vision;
    }

    getTeam(): TeamMember[] {
        return this.team;
    }
}