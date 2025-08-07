let names = [
    'jaya prajapati',
    'deepika pandya',
    'siddhi sengar',
    'utkarsh loneya',
    'khushi garoda',
    'manish kumar',
    'rohan verma',
    'abha bhagat',
    'balwan singh rajput',
    'roshni mandloi',
    'aman kumar',
    'varsha padiyar',
    'honey goswami',
    'sneha mishra',
    'naina soni',
    'shivang ranawat',
    'parth sharma',
    'raghav vishwakarma',
    'kuldeep badodiya',
    'aryan jaiswal',
    'harshit choudhary',
    'kanha jhangrala',
    'uday solanki',
    'priyanshi sharma',
    'krishnapal'
]
let min = 0;
let max = 24;
const index = Math.floor((Math.random() * (max - min)) + min);

let template = ` ${names[index]} is selceted for task `;
console.log(template);