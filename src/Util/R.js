let  style={
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'stretch'
    },
    column:{
        flex: 1,
        justifyContent:'flex-start',
        alignItems:'stretch'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    stretch:{
        alignItems:'stretch',
    }
}

let color = {
    colorPrimary:'#1ABC9C',
    colorPrimaryDark:'#16A085',
    gray:'#ECF0F1',
    grayDark:'#BDC3C7',
    windowColor:'#F5FCFF'
}

let dimen = {
    narrow:5,
    medium:10,
    wide:20
}

export default { style, color, dimen }