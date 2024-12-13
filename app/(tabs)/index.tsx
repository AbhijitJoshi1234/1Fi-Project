// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import axios from 'axios';

// interface SheetData {
//   currentValue: string;
//   totalReturns: string;
//   invested: string;
//   xirr: string;
//   dayReturn: string;
// }

// const Home: React.FC = () => {
//   const [data, setData] = useState<SheetData>({
//     currentValue: '0',
//     totalReturns: '0',
//     invested: '0',
//     xirr: '0',
//     dayReturn: '0',
//   });

//   // const [data, setData] = useState<any>(null); // State to hold sheet data
//   const [loading, setLoading] = useState<boolean>(true); // Loading state

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/sheet"); // Replace with your backend URL
//       const [headers, values] = response.data;
//       setData({
//         currentValue: values[0],
//         totalReturns: values[1],
//         invested: values[2],
//         xirr: values[3],
//         dayReturn: values[4],
//       });
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Fetch data on component mount and every 10 seconds
//   useEffect(() => {
//     fetchData(); // Initial fetch
//     const interval = setInterval(fetchData, 5000); // Fetch every 10 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await axios.get('http://localhost:3000/sheet'); // Replace with your backend endpoint
//   //     const [headers, values] = response.data;

//   //     setData({
//   //       currentValue: values[0],
//   //       totalReturns: values[1],
//   //       invested: values[2],
//   //       xirr: values[3],
//   //       dayReturn: values[4],
//   //     });
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Current Value</Text>
//       <Text style={styles.value}>₹ {data.currentValue}</Text>

// <Text style={styles.title}>Total Returns</Text>
// <Text style={styles.value}>
//   ₹ {data.totalReturns} ({((parseFloat(data.totalReturns) / parseFloat(data.invested)) * 100).toFixed(2)}%)
// </Text>

//       <Text style={styles.title}>Invested</Text>
//       <Text style={styles.value}>₹ {data.invested}</Text>

//       <Text style={styles.title}>XIRR</Text>
//       <Text style={styles.value}>{data.xirr}%</Text>

//       <Text style={styles.title}>1 Day Return</Text>
//       <Text style={styles.value}>₹ {data.dayReturn}</Text>

//       <Button title="Refresh Data" onPress={fetchData} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   value: {
//     fontSize: 24,
//     color: '#6200EE',
//     marginBottom: 10,
//   },
// });

// export default Home;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import axios from "axios";

interface SheetData {
  currentValue: string;
  totalReturns: string;
  invested: string;
  xirr: string;
  dayReturn: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<SheetData>({
    currentValue: '0',
    totalReturns: '0',
    invested: '0',
    xirr: '0',
    dayReturn: '0',
  });

  // const [data, setData] = useState<any>(null); // State to hold sheet data
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/sheet"); // Replace with your backend URL
      const [headers, values] = response.data;
      setData({
        currentValue: values[0],
        totalReturns: values[1],
        invested: values[2],
        xirr: values[3],
        dayReturn: values[4],
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount and every 10 seconds
  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 1000); // Fetch every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.Top}>
      <View style={styles.container}>
        {/* Header */}
        {/* <View style={styles.header}>
        <Image
          source={require('./chart-646.png')}  // Replace with actual logo URL
          style={styles.logo}
        />
        <Text style={styles.headerText}>Invest</Text>
        <TouchableOpacity>
          <Image
            source={require('./notification-bell-5743.png')} // Replace with a bell icon
            style={styles.icon}
          />
        </TouchableOpacity>
      </View> */}

        <View style={styles.header}>
          <View style={styles.logoContainer}>
            {/* <Image
            source={require('./chart-646.png')}  
            style={styles.logo}
          /> */}
            <Text style={styles.headerText1}>1Fi</Text>
            <Text style={styles.headerText}>Invest</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('./notification-bell-5743.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>


        {/* Current Value */}
        <Text style={styles.currentValueText}>Current Value</Text>
        {/* <Text style={styles.amount}>₹ {parseFloat(data.totalReturns) + parseFloat(data.invested)}</Text> */}
        <Text style={styles.amount}>₹ {data.currentValue}</Text>
        {/* <Text style={styles.returns}>Total Returns <Image source={require('./green-arrow-up-11385.png')} /> ₹ {data.totalReturns} (+{((parseFloat(data.totalReturns) / parseFloat(data.invested)) * 100).toFixed(2)}%)</Text> */}
        <Text style={styles.returns}>
          Total Returns{' '}
          <Image source={require('./green-arrow-up-11385.png')} />
          ₹ {data.totalReturns}{' '}
          <Text style={styles.greenText}>
            (+{((parseFloat(data.totalReturns) / parseFloat(data.invested)) * 100).toFixed(2)}%)
          </Text>
        </Text>

        {/* <Text style={styles.amount1}>
        ₹ {data.totalReturns} ({((parseFloat(data.totalReturns) / parseFloat(data.invested)) * 100).toFixed(2)}%)
      </Text> */}

        {/* <Text style={styles.returns}>
        ₹ {data.totalReturns} ({((parseFloat(data.totalReturns) / parseFloat(data.invested)) * 100).toFixed(2)}%)
      </Text> */}

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Invested</Text>
            <Text style={styles.statValue}>₹ {data.invested}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>XIRR</Text>
            <Text style={styles.statValue}>{data.xirr}%</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>1 Day Return</Text>
            <Text style={styles.statValue}>₹ {data.dayReturn}</Text>
          </View>
        </View>
      </View>
      {/* Buttons */}
      <View style={styles.BottomContainer}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>+ Invest more</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Get loan against your investments</Text>
        </TouchableOpacity>

        {/* Footer Buttons */}
        {/* <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Portfolio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Redeem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Transactions</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.footerBox}>
              <Image
                source={require('./chart-870.png')}
                style={styles.icon}
              />
              <Text style={styles.footerButtonText}> Portfolio</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.footerBox}>
              <Image
                source={require('./loop.png')}
                style={styles.icon}
              />
              <Text style={styles.footerButtonText}> Redeem</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <View style={styles.footerBox}>
              <Image
                source={require('./transactions.png')}
                style={styles.icon}
              />
              <Text style={styles.footerButtonText}> Transactions</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B23AE",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  // header: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginBottom: 20,
  // },
  logo: {
    width: 40,
    height: 40,
  },
  // headerText: {
  //   color: "white",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   textAlign: "center",
  // },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10, // Space between the logo and "Invest" text
  },
  // headerText1: {
  //   backgroundColor: "black",
  //   color: "white",
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  headerText1: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20, // Increase font size for bigger text
    fontWeight: "bold",
    padding: 12, // Add padding for more space inside the box
    borderRadius: 8, // Optional: round corners
    textAlign: "center", // Center align the text
    width: "auto", // Adjust width based on content (or use fixed size)
    alignSelf: "center", // Center the box within its container
  },

  icon: {
    width: 25,
    height: 25,
  },
  currentValueText: {
    color: "white",
    fontSize: 20,
    marginBottom: 5,
    textAlign: "center",
  },
  amount: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  amount1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  greenText: {
    color: "#00C853",
  },
  returns: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  positiveReturn: {
    color: "#50E18F",
    fontWeight: "bold",
  },
  // statsContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   marginBottom: 20,
  // },
  // statBox: {
  //   alignItems: "center",
  // },
  // statTitle: {
  //   color: "white",
  //   fontSize: 14,
  //   marginBottom: 5,
  // },
  // statValue: {
  //   color: "white",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  statsContainer: {
    flexDirection: "row", // Align boxes horizontally
    justifyContent: "space-between", // Add equal spacing between the boxes
    marginVertical: 16, // Add vertical spacing for separation
    paddingHorizontal: 8, // Optional: Add horizontal padding
  },

  statBox: {
    backgroundColor: "#9E58D8", // Slightly lighter shade of #6B23AE for background
    borderRadius: 12, // Rounded corners for a softer look
    padding: 16, // Add padding inside each box
    flex: 1, // Ensure equal width for all boxes
    marginHorizontal: 4, // Add spacing between the boxes
    alignItems: "center", // Center align text within the box
  },

  statTitle: {
    fontSize: 12,
    color: "#E2D9F3", // Light color for the title to contrast with the background
    marginBottom: 6, // Space between the title and value
    textAlign: "center", // Center align the title
  },

  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF", // White text for value for better readability
    textAlign: "center", // Center align the value
  },
  BottomContainer: {
    backgroundColor: "White",
  },
  primaryButton: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: "#00C853",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: "#5A00E1",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: "white",
    fontSize: 14,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerBox: {
    backgroundColor: "#FFFFFF", // White box background
    borderRadius: 8, // Rounded corners
    paddingVertical: 10, // Padding for height
    paddingHorizontal: 20, // Padding for width
    borderWidth: 1, // Border around the box
    // borderColor: "#DDDDDD", // Light gray border
    borderColor: "#5A00E1",
    alignItems: "center", // Center text horizontally
    justifyContent: "center", // Center text vertically
    shadowColor: "#000", // Optional: Shadow for 3D effect
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row",
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // For Android
  },
  footerButton: {
    alignItems: "center",
  },
  footerButtonText: {
    color: "black",
    fontSize: 14,
  },
  loadingText: {
    color: "white",
    fontSize: 18,
  },
});

export default Home;

