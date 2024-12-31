const {Model} = require('objection');
const Questions = require('./questionModel');

class Options extends Model{
    static get tableName(){
        return 'options';
    }

    static get jsonSchema(){
        return {
            type : 'object',
            required : ['option'],
            properties : {
                id : {type:'integer'},
                question_id : {type: 'integer'},
                option : {type:'string'}
            }
        }
    }

    static get relationMappings(){
        return {
            question : {
                relation : Model.BelongsToOneRelation,
                modelClass : Questions,
                join : {
                    from : 'options.question_id',
                    to : 'questions.id'
                }
            }
        }
    }
}

module.exports = Options