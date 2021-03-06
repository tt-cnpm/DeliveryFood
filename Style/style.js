import React from "react";
import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');
// This is style for splash screen
export const flexStyle = StyleSheet.create({
    wrapper:
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
});

export const splashStyle = StyleSheet.create({
  wrapper: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 20
  },
  icon: {
      width: 75,
      height: 75,
      marginBottom: 15
  },
  text: {
        fontSize: 30,
        color: '#1F9F5F',
        fontWeight: 'bold',
  },
  copyright:
  {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textCopyright:
  {
    fontSize: 14,
    color: '#1F9F5F',
  },
    loading:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
});


// This is style for round button
export const roundButtonStyle = StyleSheet.create(
  {
      general: {
          display: 'flex',
          padding: 5,
          justifyContent: 'center'
      },
      text:
      {
          fontSize: 18,
          width: '100%',
          textAlign: 'center',
          fontWeight: 'bold',
          paddingHorizontal: 10,
          paddingVertical: 5
      }
  }
);

// This is style for button which has an icon
export const roundButtonIconStyle = StyleSheet.create({
  general: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    position: 'relative',
    zIndex: 9,
    right: 40
  }
});


// This is style for anchor
export const anchorStyle = StyleSheet.create({
  text: {
    width: '100%',
    textAlign: 'center',
    padding: 10
  }
});


export const anchorIconStyle = StyleSheet.create({
  wrapper:
  {
    display: "flex",
    width: "100%",
    marginHorizontal: 15,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)"
  },
  text:
  {
    ...anchorStyle.text,
    textAlign: "left"
  },
  icon:
  {
      paddingHorizontal: 15,
  }
});

// This is style for login form
export const loginStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: "90%",
    width: "100%"
  },
  text:
  {
    fontSize: 12,
    textAlign: "right",
    marginTop: 10,
    color: "#014D40",
    fontWeight: "bold"
  },
  title:
  {
      color: "#014D40",
      fontSize: 40,
      fontWeight: "bold",
      width: "100%",
      textAlign: 'center',
  },
  titleWrapper:
  {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  scrollView:
  {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonWrapper:
  {
      width: "100%",
      height: "39%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
  }
});

// Style for register component
export const registerStyle = StyleSheet.create({
  wrapper:
  {
      backgroundColor: "transparent",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: '90%',
      width: "100%"
  },
  titleWrapper:
  {
      width: "100%",
      height: "15%",
      ...flexStyle.wrapper,
  },
  text:
  {
      fontSize: 40,
      color: '#014D40',
      textAlign: "center",
      width: "100%",
      justifyContent: "center",
      fontWeight: "bold"
  },
  form:
  {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    height: "50%",
  },
  picker:
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    marginTop: "5%"
  },
  imageContentStyle:
  {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonWrapper:
  {
     width: "90%",
     height: "15%",
     display: "flex",
     alignItems: "center",
     marginTop: "10%"
  },
  pickerWrapper:
  {
    width: "50%",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  }
});


// Style for Account component
export const accountStyle = StyleSheet.create({
      Wrapper:
      {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
      },
      notLogInHeading:
      {
            fontSize: 22,
            padding: 10,
            fontWeight: "bold"
      },
      notLogInText:
      {
            fontSize: 16,
            padding: 5,
            color: "black"
      },
      titleStyle:
      {
        fontWeight: "bold",
        fontSize: 20
      },
      title:
      {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "20%",
        backgroundColor: "#6733B9",
        alignItems: 'center'
      },
      username:
      {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'left',
      },
      type:
      {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 15,
        textAlign: 'left',
      },
      avatarWrapper:
      {
        ...flexStyle.wrapper,
        width: "30%",
        height: "60%",
        marginLeft: "5%"
      },
      nameTitleWrapper:
      {
        ...flexStyle.wrapper,
        height: "60%",
        width: "60%",
        marginLeft: "5%"
      }
});


// Style for HomeCustomer component
export const homeStyle = StyleSheet.create({
      wrapper:
      {
        flex: 1,
        backgroundColor: "#EAEAEA"
      },
      scroll:
      {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: 'flex-start',
          alignItems: "center"
      },
});

// Style for swiper component
export const swiperStyle = StyleSheet.create({
    container:
    {
      display: "flex",
      backgroundColor: "white",
    },
    swiperItem:
    {
      display: "flex",
      justifyContent: "center",
      width,
      height: height * 0.4,
    },
    textOnSwiper:
    {
          fontSize: 30,
          width,
          fontWeight: "bold",
          color: "white",
          position: 'absolute',
          top: height * 0.2 + 40,
          paddingVertical: 30,
          paddingHorizontal: 20,
          backgroundColor: "rgba(0, 0, 0, 0.5)"

    },
    imageOnSwiper:
    {
          width:  width,
          height: height * 0.4,
    },
    loading:
    {
      height: height,
      width: width
    },
    cantLoading:
    {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      width:  "100%",
      height: height * 0.4,
      display: "flex",
    }
});

// Style for header component
export const headerStyle = StyleSheet.create({
      wrapper:
      {
        backgroundColor: "#248823",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 60,
        flexDirection: "row"
      },
      iconWrapper:
      {
        width: "50%",
        ...flexStyle.wrapper,
        paddingVertical: 10,
        borderRadius: 60,
      }
});


// Style for listView component
export const listViewStyle = StyleSheet.create({
    item:
    {
          height: 200,
          width: 150,
          margin: 5,
          paddingBottom: 10,
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: 4,
          display: "flex",
          alignItems: "center"
    },
    wrapper:
    {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    image:
    {
        width: "100%",
        height: "70%",
        borderRadius: 3
    },
    text:
    {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        paddingVertical: 10,
        width: "90%"
    },
    rateWrapper:
    {
      backgroundColor: "#227100",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      width: "30%",
      justifyContent: "center",
      alignItems: "center",
      padding: 3
    },
    wrapperRateAndPrice:
    {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "10%",
      justifyContent: "center",
      alignItems: "center"
    },
    priceWrapper:
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: "60%",
    }
});


export const notification = StyleSheet.create({
    headerTitle:
    {
          color: "white",
          fontSize: 20,
          fontWeight: "bold"
    },
    backWrapper:
    {

    },
    back:
    {

    },
    drawerTitle:
    {
          width: 100,
          height: 100,
          fontSize: 80,
          position: 'absolute',
          left: "29%",
          top: 50,
          zIndex: 9,
          fontWeight: "bold",
          color: "white",
          borderWidth: 4,
          borderColor: "white",
          borderRadius: 60,
          paddingLeft: 20,
          paddingBottom: 22
    },
    itemContainer:
    {
      width: "85%",
      //borderWidth: 1,
      //borderColor: "rgba(0, 0, 0, 0.2)",
      backgroundColor: "white",
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      shadowOffset: { width: 10, height: 10 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      elevation: 3,
    },
    titleItemWrapper:
    {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.2)",
          paddingBottom: 10
    },
    titleText:
    {
      fontSize: 13,
      fontWeight: "bold",
      color: "black"
    },
    timeText:
    {
      fontSize: 11
    },
    contentItem:
    {
      paddingTop: 10,
    },
    closeButton:
    {
      position: "absolute",
      zIndex: 10,
      elevation: 5,
      top: "2%",
      left: "85%"
    },
    noLoginText:
    {
      fontSize: 20,
      fontWeight: "bold",
      padding: 10
    }
});



export const  CartStyle = StyleSheet.create({
      textNotLogin:
      {
          fontSize: 22,
          padding: 5,
          fontWeight: "bold",
          textAlign: "center",
          width: "90%",
          marginBottom: "5%"
      }
});


export const detailFood = StyleSheet.create({
    wrapper:
    {
          width: "100%",
          height: "100%",
          display: "flex",
          position: 'relative'
    },
    image:
    {
          width: "100%",
          height: 300
    },
    title:
    {
          fontSize: 20,
          padding: 5,
          marginVertical: 5,
          textAlign: "center",
          fontWeight: "bold"
    },
    price:
    {
          width: "40%",
          fontSize: 18,
          color: "#5B9642",
          fontWeight: "bold",
          paddingLeft: 20,
          textAlign: "left",
    },
    foodInfor:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        paddingTop: 0,
        marginBottom: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 3,
        backgroundColor: "white",
        width: "100%",

    },
    statusFood:
    {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 5
    },
    titleAndPrice:
    {
        width: "90%"
    },
    textOnStatus:
    {
      fontSize: 14,
      textAlign: "left",
      width: "80%",
      padding: 5
    },
    wrapperItemStatus:
    {
      width: "40%",
      display: "flex",
      justifyContent: 'space-between',
      alignItems: "center",
      flexDirection: "row"
    },
    button:
    {
      top: 10,
      left: 15,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      padding: 10,
      width: 50,
      height: 50,
      borderRadius: 40
    },
    cantLoading:
    {
      height: height * 0.6,
      width: width
    }
});

export const resInfor = StyleSheet.create({
  wrapper:
  {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
  },
  name:
  {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
  },
  locate:
  {
      width: "100%",
      marginLeft: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
  },
  banner:
  {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
  },
  statistics:
  {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: 15,
      marginBottom: 5,
      backgroundColor: "#F2FDE0",
      borderRadius: 10,
      paddingVertical: 15,
  },
  statisticsWrapper:
  {
    width: "30%",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstText:
  {
        fontSize: 16,
        fontWeight: "bold",
        color:"#227100",
        textAlign: "center"
  },
  secondText:
  {
        fontSize: 14,
        textAlign: "center"
  }
});

export const commentStyle = StyleSheet.create({
    wrapper:
    {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.2)",
          paddingVertical: 3
    },
    avatarAndName:
    {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: 'row',
          paddingTop: 5
    },
    nameAndTime:
    {
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
    },
    content:
    {
          width: "80%",
          fontSize: 14,
          padding: 3,

    },
    nameText:
    {
        fontSize: 14,
        paddingLeft: 20,
        fontWeight: "bold",
        textAlign: "left",
        width: "100%"
    },
    timeText:
    {
          fontSize: 12,
          textAlign: "left",
          width: "80%",
          paddingLeft: 5
    },
    anchorWrapper:
    {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      width: "30%",
    },
    time:
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      flexDirection: "row",
      paddingLeft: 6

    },
    inputWrapper:
    {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10,
    },
    input:
    {
      width: "85%",
      ...flexStyle.wrapper,
      flexDirection: "row",
      borderRadius: 20,
      borderWidth: 1
    }
});


export const componentWithTitle = StyleSheet.create({
      wrapper:
      {
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 3,
        paddingBottom: 5

      },
      header:
      {
          width: "90%",
          display: "flex",
          flexDirection: 'row',
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.2)",
          marginBottom: 5

      },
      body:
      {
          width: "90%",
          padding: 5,
          marginBottom: 5
      },
      wrapperSnd:
      {
            width: "30%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end"
      },
      title:
      {
            fontSize: 16,
            textAlign: "left",
            fontWeight: "bold"
      },
      text:
      {
            width: "100%",
            textAlign: 'right',
            fontSize: 12,
      }
});



export const bookingStyle = StyleSheet.create({
  container:
  {
      width,
      height,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  wrapper:
  {
        width: "85%",
        height: "75%",
        ...flexStyle.wrapper,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 3,
        backgroundColor: "white",


  },
  image:
  {
          width: 80,
          height: 80,
          borderRadius: 50,
          top: 5,
          left: 5
  },
  name:
  {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "7%",
          //backgroundColor: "#F2FDE0",
          borderRadius: 50,
  },
  count:
  {
        marginHorizontal: 4,
        width: "90%",
        height: "20%",
  },
  address:
  {
      marginHorizontal: 4,
      width: "90%",
      height: "20%",
  },
  confirm:
  {
        borderTopWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 0.2)",
        width: "100%",
        height: "15%",
        marginTop: "5%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
  },
  adjustCount:
  {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "60%",
          borderColor: "rgba(0, 0, 0, 0.2)",
          borderWidth: 1,
          borderRadius: 5,
          marginLeft: "20%",
  },
  text:
  {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: 'left',
    width: "100%"
  },
  time:
  {
      marginHorizontal: 4,
      width: "90%",
      height: "20%",
  },
  TouchableOpacity:
  {
    width: "30%",
    display: "flex",
    justifyContent: "center"
  },

  counting:
  {
     fontSize: 15,
     fontWeight: "bold",
     paddingVertical: 8,
     paddingHorizontal: 15,
     borderLeftWidth: 1,
     borderRightWidth: 1,
     borderColor: "rgba(0, 0, 0, 0.2)",
     textAlign: "center"
  },
  modal:
  {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  modalCounting:
  {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  price:
  {
    fontSize: 20,
    fontWeight: "bold",
    color: "#911111",
    width: "100%",
    textAlign: "center"
  },
  priceWrapper:
  {
    ...flexStyle.wrapper,
    width: "50%",
    height: "100%"
  },
  note:
  {
    fontSize: 11,
    padding: 5,
    textAlign: 'center',
    width: "100%"
  }
});


export const bookTableStyle = StyleSheet.create({
  wrapper:
  {
        width: "80%",
        backgroundColor: "white",
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 3,
        display: "flex",
        alignItems: "center"
  },
  container:
  {
    width,
    height,
    flex: 1
  },
  title:
  {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    width: "90%",

  },
  titleWrapper:
  {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text:
  {
    fontSize: 14,
    fontWeight: "bold",
    padding: 5,
    marginVertical: 5
  },
  price:
  {
    textAlign: "center",
    width: "100%",
    fontSize: 18,
    color: "#911111",
    fontWeight: "bold"
  },
  picker:
  {
    width: "100%",
    height: 20,
    color: "gray"
  }
});

export const resInforStyle = StyleSheet.create({
  wrapper:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  wrapperText:
  {
    ...flexStyle.wrapper,
    flexDirection: "row",
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    padding: 5,
    height: "20%"
  },
  icon:
  {
    width: "15%"
  },
  text:
  {
    width: "85%",
    textAlign: 'right',
    fontWeight: "bold",
    fontSize: 16,
    padding: 10
  },
  infor:
  {
    display: "flex",
    alignItems: 'center',
    height: "48%"
  },
  map:
  {
    width: "100%",
    height: "52%",

    //--------------------
      backgroundColor: "rgba(0, 0, 0, 0.2)",


    //--------------------
  },
  button:
  {
    borderWidth: 1,
    borderColor: "#1F9F5F",
    marginTop: -2,
    width: "50%",
    height: "100%"
  },
  buttonWrapper:
  {
        height: "20%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
  }
});

export const listViewMenuItemStyle = StyleSheet.create({
  item:
  {
      flexDirection:"row",
      height: 100,
      width: "100%",
      margin: 5,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderRadius: 4
  },
  loader:
  {
    height: 100,
    width: "100%",
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image:
  {
      width: 100,
      height: "100%",
      borderRadius: 3
  },
  wrapper:
  {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
  },
  text:
  {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 16,
      paddingBottom: 20,
      paddingTop: 10,
      paddingLeft: 10
  },
  wrapperRateAndPrice:
  {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center"
  },
  priceWrapper:
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
  },
  rateWrapper:
  {
    backgroundColor: "#227100",
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    padding: 3
  },
  button:
  {
    marginRight: 5,
    width: 40,
    height: 50,
    backgroundColor: 'transparent'
  }
});
export const modalViewInfoStyle = StyleSheet.create({
    item:
    {
          height: 400,
          paddingBottom: 10,
          backgroundColor: "white",
          flexDirection : "column"
          //borderWidth: 1,
          //borderColor: "rgba(0, 0, 0, 0.2)",
          //borderRadius: 4
    },
    wrapper:
    {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    image:
    {
        width: "100%",
        height: "60%",
        borderRadius: 3
    },
    text:
    {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        paddingVertical: 10
    },
    rateWrapper:
    {
      backgroundColor: "#227100",
      borderRadius: 40,
      display: "flex",
      flexDirection: "row",
      width: "30%",
      justifyContent: "center",
      alignItems: "center",
      padding: 3
    },
    wrapperRateAndPrice:
    {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "10%",
      justifyContent: "center",
      alignItems: "center"
    },
    priceWrapper:
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: "60%",
    }
});
export const modalEditInfoStyle = StyleSheet.create({
    item:
    {
          height: 400,
          paddingBottom: 10,
          backgroundColor: "white",
          flexDirection : "column"
          //borderWidth: 1,
          //borderColor: "rgba(0, 0, 0, 0.2)",
          //borderRadius: 4
    },
    image:
    {
        width: "100%",
        height: "60%",
        borderRadius: 3
    },
    wrappername:
    {
        flexDirection:"row",
        paddingVertical: 10,
        height: 50
    },
    textname:
    {
        paddingLeft: 20,
        fontWeight: "bold",
        fontSize: 16,
        width: "20%",
    },
    inputname:
    {
        margin : 15,
        width: "80%",
        textAlign: "left",
        fontSize : 16,
        height: 40
    },
    apply:
    {
        marginBottom: 30,
         alignItems: 'center',
         backgroundColor: '#2196F3',
         marginHorizontal: 100,
         height: 50,
         justifyContent: 'center'
    }
});
export const modalAddFoodStyle = StyleSheet.create({
    item:
    {
          height: 400,
          paddingBottom: 10,
          backgroundColor: "white",
          flexDirection : "column",

    },
    image:
    {
        margin: 5,
        height: 300,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 4,
        justifyContent: 'center'
    },
    wrappername:
    {
        flexDirection:"column",
        paddingVertical: 10,
        height: 30
    },
    textname:
    {
        paddingLeft: 20,
        fontWeight: "bold",
        fontSize: 16,
        width: "40%",
        height : 30,
        paddingTop: 10
    },
    inputname:
    {
      margin: 5,

      borderColor: '#2196F3',
      borderWidth: 1,
      fontSize: 16,
      borderRadius: 5
    },
    apply:
    {
        marginBottom: 30,
         alignItems: 'center',
         backgroundColor: '#2196F3',
         height: 50,
         justifyContent: 'center',
         width: 100
    },
    pickerType:
    {
        width:"50%",
        height: 40,
        color: "gray"
    }
});
export const orderStyle = StyleSheet.create({
  container:
  {
      width,
      height,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  wrapper:
  {
        width: "85%",
        height: "75%",

        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 3,
        backgroundColor: "white",


  },
  image:
  {
          width: 80,
          height: 80,
          borderRadius: 50,
          top: 5,
          left: 5
  },
  name:
  {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "7%",
          //backgroundColor: "#F2FDE0",
          borderRadius: 50,
  },
  count:
  {
        marginHorizontal: 20,
        width: "90%",
        flexDirection: 'row',
        paddingTop: 20,
  },
  address:
  {
      marginHorizontal: 20,
      width: "90%",
      height: "20%",
      flexDirection: 'row',
  },
  confirm:
  {
        borderTopWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 0.2)",
        width: "100%",
        height: "15%",
        marginTop: "5%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
  },
  adjustCount:
  {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "60%",
          borderColor: "rgba(0, 0, 0, 0.2)",
          borderWidth: 1,
          borderRadius: 5,
          marginLeft: "20%",
  },
  text:
  {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: 'left',
  },
  time:
  {
      marginHorizontal: 20,
      width: "90%",
      height: "20%",
      flexDirection:'row',
  },
  TouchableOpacity:
  {
    width: "30%",
    display: "flex",
    justifyContent: "center"
  },

  counting:
  {
     fontSize: 15,
     fontWeight: "bold",
     paddingVertical: 8,
     paddingHorizontal: 15,
     borderLeftWidth: 1,
     borderRightWidth: 1,
     borderColor: "rgba(0, 0, 0, 0.2)",
     textAlign: "center"
  },
  modal:
  {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  modalCounting:
  {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  price:
  {
    fontSize: 20,
    fontWeight: "bold",
    color: "#911111",
    width: "100%",
    textAlign: "center"
  },
  priceWrapper:
  {
    ...flexStyle.wrapper,
    width: "50%",
    height: "100%"
  },
  note:
  {
    fontSize: 11,
    padding: 5,
    textAlign: 'center',
    width: "100%"
  }
});
export const orderItem = StyleSheet.create({
    headerTitle:
    {
          color: "white",
          fontSize: 20,
          fontWeight: "bold"
    },
    backWrapper:
    {

    },
    back:
    {

    },
    drawerTitle:
    {
          width: 100,
          height: 100,
          fontSize: 80,
          position: 'absolute',
          left: "29%",
          top: 50,
          zIndex: 9,
          fontWeight: "bold",
          color: "white",
          borderWidth: 4,
          borderColor: "white",
          borderRadius: 60,
          paddingLeft: 20,
          paddingBottom: 22
    },
    itemContainer:
    {
      width: "85%",
      //borderWidth: 1,
      //borderColor: "rgba(0, 0, 0, 0.2)",
      backgroundColor: "white",
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      shadowOffset: { width: 10, height: 10 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      elevation: 3,
    },
    titleItemWrapper:
    {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.2)",
          paddingBottom: 10
    },
    titleText:
    {
      fontSize: 13,
      fontWeight: "bold",
      color: "black"
    },
    timeText:
    {
      fontSize: 11
    },
    contentItem:
    {
      paddingTop: 10,
    },
    closeButton:
    {
      position: "absolute",
      zIndex: 10,
      elevation: 5,
      top: "2%",
      left: "85%"
    },
    noLoginText:
    {
      fontSize: 20,
      fontWeight: "bold",
      padding: 10
    }
});

export const gridStyle = StyleSheet.create({
      container:
      {
            width: "100%",
            display: "flex",
            alignItems: "center",
            shadowOffset: { width: 10, height: 10 },
            shadowColor: 'black',
            shadowOpacity: 0.3,
            elevation: 3,
            backgroundColor: "white",
            borderWidth: 1,
            borderTopWidth: 0,
            borderColor: "rgba(0, 0, 0, 0.2)",
      },
      wrapper:
      {
          width: "96%",

      },
      image:
      {
            width: "100%",
            height: "75%",
            borderRadius: 5
      },
      title:
      {
            fontSize: 20,
            fontWeight: "bold",
            padding: 10,
            paddingLeft: 15
      },
      titleWrapper:
      {
              width: "100%",
              marginBottom: 8
      },
      wrapperItem:
      {
        width: "48%",
        height: 200,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: "2%"
      },
      inforItem:
      {
            width: "90%",
            marginLeft: "5%"
      },
      titleItem:
      {
          fontSize: 16,
          textAlign: "center",
          paddingVertical: 5,
          fontWeight: "bold"
      },
      priceItem:
      {
          textAlign: "center",
          color: "green",
          fontWeight: "bold"
      },
      listWrapper:
      {
          width: "100%",
          display: "flex",
          flexWrap: 'wrap',
          justifyContent: "space-around",
          flexDirection: "row"
/*
          borderColor: "black",
          borderWidth: 1
*/
    },
      cantLoading:
      {
        height: 230,
        width: width * 0.48
      }
});


export const loginAndRegister = StyleSheet.create({
      wrapper:
      {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center'
      },
      button:
      {
            height: "8%",
            width: "100%",
            marginTop: -2
      }
});


export const messageStyle = StyleSheet.create({
  wrapper:
  {
    width: "90%",
    marginLeft: "5%",
    display: "flex",
    flexDirection: 'row',
    position: "absolute",
    elevation: 4
  },
  text:
  {
    padding: 10,
    paddingLeft: 20,
    width: "100%"

  }
});


export const LikeFoodStyle = StyleSheet.create({
    container:
    {
        width: "100%",
        ...flexStyle.wrapper,
        paddingVertical: 5,
        backgroundColor: "white"
    },
    wrapperItem:
    {
          display: "flex",
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingVertical: 20,
          paddingLeft: "3%",
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.2)"
    },
    image:
    {
            width: 60,
            height: 60,
            borderRadius: 50
    },
    titleItem:
    {
          fontSize: 18,
          fontWeight: "bold",
          width: "100%"
    },
    nameRes:
    {
          width: "100%"
    },
    wrapTextItem:
    {
      display: "flex",
      width: "70%",
      justifyContent: "center",
      paddingLeft: "8%"
    },
    titleSection:
    {
      width: "100%",
      padding: 10,
      paddingLeft: 20,
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
      backgroundColor: "black",
      marginTop: -1,
    },
});


export const CartCustomerStyle = StyleSheet.create({
        container:
        {
              width: "100%",
              alignItems: "center",
              justifyContent: 'center',
        },
        wrapperItem:
        {
                width: "94%",
                marginLeft: "3%",
                marginVertical: 10,
                backgroundColor: "white",
                shadowOffset: { width: 10, height: 10 },
                shadowColor: 'black',
                shadowOpacity: 0.7,
                elevation: 5,
        },
        image:
        {
                width: 100,
                height: 100
        },
        headerY:
        {
           backgroundColor: "green",
           display: "flex",
           flexDirection: "row",
           padding: 10,
           justifyContent: 'center',
           alignItems: 'center'
        },
        headerN:
        {
              backgroundColor: "#FF6666",
              display: "flex",
              flexDirection: "row",
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center'
        },
        headerD:
        {
              backgroundColor: "#0078D7",
              display: "flex",
              flexDirection: "row",
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
        },
        icon:
        {
              width: '12%',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: -5
        },
        titleHeader:
        {
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              width: "60%",
              paddingLeft:  "5%",
        },
        time:
        {
                color: "white",
                fontSize: 12,
                width: "28%",
                textAlign: 'center',
        },
        textWrapper:
        {
              display: 'flex',
              justifyContent: "center",
              width: "65%",
              paddingLeft: "5%",
        },
        info:
        {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          padding: 10
        },
        title:
        {
                fontSize: 16,
                fontWeight: "bold",
        },
        nameRes:
        {
                fontSize: 14
        },
        price:
        {
            fontWeight: "bold",
            color: "red",
            fontSize: 14
        },
        titleCart:
        {
           textAlign: "center",
           padding: 20,
           fontWeight: "bold",
           fontSize: 25,
           backgroundColor: "white",
           color: "black"
        },
        typeOfTable:
        {
          width: "28%",
          marginRight: "2%",
          borderRadius: 10,
          borderWidth: 1,
          borderColor:"white"
        }
});
