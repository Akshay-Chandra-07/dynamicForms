const {Model} = require('objection')
const Options = require('./optionsModel')

class Questions extends Model{
    static get tableName(){
        return 'questions'
    }

    static get jsonSchema(){
        return{
            type : 'object',
            required : ['question'],
            properties : {
                id : {type: 'integer'},
                question : {type: 'string'}
            }
        }

    }

    static get relationMappings(){
        return {
            options :{
                relation : Model.HasManyRelation,
                modelClass : Options,
                join : {
                    from : 'questions.id',
                    to : 'options.question_id'
                }
            }
        }
    }

}

module.exports = Questions