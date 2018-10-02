
const graphql = require('graphql');
// const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
//
// const toneAnalyzer = new ToneAnalyzerV3({
//     version: '{version}',
//     iam_apikey: '{iam_api_key}',
//     url: '{url}'
//   });

const { GraphQLSchema,
        GraphQLString,
        GraphQLObjectType } = require('graphql');

const singleParagraphType = new GraphQLObjectType({
  name: 'singleParagraph',
  fields: {
    text: { type: GraphQLString }
  }
});


const RootQueryType = new GraphQLObjectType({
  name: 'rootquery',
  fields: () => ({
    text: {
      type: singleParagraphType,
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
