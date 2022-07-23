import {AddElement} from '../actions/types'


let initState = 
[	

	{"-":[
		{
		"-":[
			{"-":"-"},
			]},
		]},
		
	{"CHARGES QUOTIDIENNES":[
			{
			"-":[
				{"-":"-"},
				]},
		
			{
			"TRANSPORT":[
				{"LIVRAISON":""},
				{"AUTRES":""},
				]},
			{"TELEPHONE":[
				{"GSM":""},
				{"FIXE":""},
				]
			}]},

	{"AUTRESCHARGES":[
			{
			"-":[
				{"-":"-"},
				]},
			{"FOURNITURES":""}, 
			{"PRODUITS DE NETTOYAGES":""},
			{"ENTRETIEN ET REPARATION":""}, 
			]},
	{"MATERIEL SROULANTS":[
			{
			"-":[
				{"-":"-"},
				]},
			{"GASOIL":[
				{"PARTNER BLANC":""},
				{"PARTNER GRIS":""},
				{"MOTO 103":""},
				]},
			{"ENTRETIEN & REPARATION":[
                {"PARTNER BLANC":""},
				{"PARTNER GRIS":""},
				{"MOTO 103":""},
				]},
			]},  
	{"AVANCES/SALAIRES":[
		{
		"-":[
			{"-":"-"},
			]}],},
	{"REMBOURSSEMENT":[
		{
		"-":[
			{"-":"-"},
			]}],},

]


    const DepOpReducer = (state=initState, action) => {
        switch (action.type) {
             case AddElement: return(
				// {...state[2],AUTRESCHARGES:{...state(AUTRESCARGES[1],FOURNITURES:{...state.FOURNITURES,"":action.payload[1]}}}
				// AUTRESCHARGES:[{...state.AUTRESCHARGES,FOURNITURES:[...state[2].AUTRESCHARGES.FOURNITURES,{"":action.payload[1]}]}]
		
		
				// state: {...state[2]["AUTRESCHARGES"],FOURNITURES:action.payload[1]}
		

				 state.map((el,i)=>(el[i].map((el)=>(el==="FOURNITURES")?[...el,[action.payload[1]]]:el)))
					
					
			 )


             default :return state;	
        }
    
    };

export default DepOpReducer