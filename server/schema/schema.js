
const graphql = require('graphql');
const { GraphQLSchema,
        GraphQLString,
        GraphQLObjectType } = require('graphql');

/*https://www.ibm.com/watson/developercloud/tone-analyzer/api/v3/node.html?node#introduction*/

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
  'version_date': '2017-09-21',
  'iam_apikey': '{apikey}'
});

var text = 'Team, I know that times are tough! Product '
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!'

var toneParams = {
  'tone_input': { 'text': text },
  'content_type': 'application/json'
};

toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(toneAnalysis, null, 2));
  }
});


const RootQueryType = new GraphQLObjectType({
  name: 'rootquery',
  fields: () => ({
    text: {
      type: GraphQLString,
      args: { type: { GraphQLString } },
      resolve(parentValue, args){
        return args; //add get request
      }
    }
  })
})

 module.exports = new GraphQLSchema({
  query: RootQueryType
})
