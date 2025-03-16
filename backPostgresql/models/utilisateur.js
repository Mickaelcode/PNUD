const {Db} = require('../BD/db')
/**
 * matricule,name,firstName,fonction,type,password
 */
class Utilisateur{
    constructor(matricule,name,lastName,fonction, mdp, type){
        this.matricule=matricule
        this.mdp=mdp
        this.type = type
        this.fonction = fonction
        this.lastName = lastName
        this.name = name
        this.db=new Db
    }




    async connection(){
        try {
            return await this.db.selectByConstraint(this.type,['matricule','mot_de_passe'],[this.matricule,this.mdp],'=','&')!=0
        } catch (err) {
            console.error('Error executing selectByConstraint query:', err.message);
            throw err;
        }
    }

    async update(){
        try{
            return await this.db.update(this.type,['matricule','mot_de_passe'],[this.matricule,this.mdp],this.matricule,this.mdp)
        }catch{
            console.log('Error updating query',err.message);
            throw err 
            
        }
    }
}

module.exports = {Utilisateur}