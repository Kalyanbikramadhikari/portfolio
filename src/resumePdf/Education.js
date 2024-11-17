import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    pdfViewer: {
        width: '100vw',  // Full width of the viewport
        height: '100vh', // Full height of the viewport
    },
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        width: '100%',  // Ensure it uses the full width
        height: '100%', // Ensure it uses the full height
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    horizontalLine: {
        marginTop: '3px',
        borderBottom: '1px solid black'
    },
    WorkPlace: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '10px'
    },
    designation: {
        fontSize: '10px'
    },
    works:{
        fontSize:'9px'
    }

});

const Education = () => (
    <View>
        <Text>Education & Qualification</Text>
        <View style={styles.horizontalLine}></View>
        <View>

        </View>
        
    </View>
);

export default Education;
