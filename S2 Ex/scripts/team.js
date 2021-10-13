class Team {
    constructor(){
        this.teamName = '';
        this.trainer = '';
        this.roster = [''];
    }

    

     describe()
    {
        let describe = `Team ${this.teamName} with trainer ${this.trainer}
        has the following pokemon: ${[...this.roster]}`;

        return describe;
    }
}

export default Team;