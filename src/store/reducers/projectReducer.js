
const initState = {
    projects: [
        { id: 'a10', title: 'Man of the people', content: 'The love he created for me is superb'},
        { id: 'a11', title: 'John of life', content: 'Felt Teachers is a platform that provides qualified teachers to schools and parents for their pupils. It also provides a grading platform where institution (government and international bodies) can use to grade their employed teaching staff'},
        { id: 'a12', title: 'He saves life', content: 'According to the Director-General of the United Nations Educational, Scientific and Cultural Organization (UNESCO), about 13 million children and youths have not been going to school especially in regions like Northern Nigeria which has been affected by continous outbreak of insurgence. Since 2015, UNESCO’s regional response has focused on “Bridging Learning Gaps for'}
    ]
}
const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
         console.log('created project',  action.project)
         return state;
         case 'CREATE_PROJECT_ERROR':
             console.log('create project error', action.err)
             return state;
             default:
                 return state;
    }
}

export default projectReducer;