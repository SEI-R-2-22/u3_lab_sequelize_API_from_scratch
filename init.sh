#pokemon model
sequelize model:generate --name Pokemon --attributes name:string,moves:string,health:integer,type:string
#zone model
sequelize model:generate --name Zone --attributes name:string,difficulty:string
#moves model
sequelize model:generate --name Moves --attributes name:string,damage:string,type:string