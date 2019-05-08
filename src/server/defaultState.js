import md5 from 'md5';
export const defaultState = {
    users:[{
        id:"U1",
        name:"Dev",
        passwordHash:md5("TUPLES"),
        friends:[`U2`]
    },{
        id:"U2",
        name:"C. Eeyo",
        passwordHash:md5("PROFITING"),
        friends:[]
    }],
    groups:[{
        name:"To Do",
        id:"G1",
        owner:"U1"
    },{
        name:"Doing",
        id:"G2",
        owner:"U1"
    },{
        name:"Done",
        id:"G3",
        owner:"U1"
    }
    ],
    tasks:[{
        name:"Refactor tests",
        description:"clean up existing code without changing existing behavior",
        status:"To Do",
        owner:"U1",
        ETA: "25/04/2019",
    },{
        name:"Meet with project team",
        description:"to meet with project team to discuss the future goals of the project",
        status: "Done",
        owner:"U1",
        ETA: "19/04/2019",
    },{
        name:"Fix warnings",
        description:"to fix warnings happening on the console ",
        status: "In Progress",
        owner:"U2",
        ETA: "24/04/2019",
    },{
        name:"Production optimizations",
        description:"this is an spike to research FE performance optimizations",
        id:"T5",
        status:"Done",
        owner:"U1",
        ETA: "18/04/2019",
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great work!",
        group: {
            name:"TO DO",
            id:"G1",
            owner:"U1"
        }
    }]
};