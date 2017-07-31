import commonColor from './../../native-base-theme/variables/commonColor';

export const homePage = {
	content:{
		marginTop: 30,
		flex: 1,
		flexDirection: 'column'
	}
}

export const searchBox = {
	inputGroup:{
		padding: 5,
		paddingLeft: 16
	},
	selectorView: {
		flexDirection: 'column',
		marginBottom: 10
	},
	selectedView:{
		flexDirection: 'row',
        flexWrap: 'wrap',
	}

}


export const pillStyle = {
	base:{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: commonColor.brandInfo,
		borderWidth: 1, 
		borderRadius: 14,
		margin: 3,
		paddingLeft: 5,
		paddingRight: 5, 	

	},
	text: {
		flex: 1,
		color: commonColor.brandInfo  ,
		fontSize: 16, 
		
	},
	icon:{
		marginLeft: 10,
		fontSize: 14,
		color: commonColor.brandInfo
	}

}
