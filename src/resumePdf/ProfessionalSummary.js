import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

Font.register({
    family: 'TimesNewRoman',
    src: '/assets/fonts/timesNewRoman.ttf', // Path to your .ttf file in the public folder
    fontWeight: 'normal',
});
Font.register({
    family: 'TimesNewRoman',
    src: '/assets/fonts/timesNewRomanBold.ttf', // Path to your .ttf file in the public folder
    fontWeight: 'bold',
});

// Create styles
const styles = StyleSheet.create({


    horizontalLine: {
        marginTop: '2px',
        borderBottom: '1px solid black',
        marginBottom: '2px'
    },
    headings: {
        // fontSize:'12px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
        fontSize: '16px'

    },
    professionalsummary: {
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
        fontSize: '8px'
    }


});

const ProfessionalSummary = () => (
    <View>
        <Text style={styles.headings}>Professional Summary</Text>
        <View style={styles.horizontalLine}></View>
        <View>
            <Text style={styles.professionalsummary}>
            Software Engineer with 2+ years of experience developing efficient, user-friendly web applications using ReactJS for the frontend and NodeJS for the backend. Proven track record in improving application performance, usability, and accessibility by implementing best practices and collaborating with cross-functional teams. Demonstrated expertise in creating intuitive user experiences while maintaining high code quality standards. Skilled in writing well-designed, testable, and efficient code while collaborating with engineers, designers, and product teams to ensure all work meets quality standards before deployment. Experienced in providing technical support and maintenance for existing projects. A passionate developer with the ability to work both independently and collaboratively in a remote setting, with a strong focus on creating intuitive and user-friendly experiences.
                        </Text>
        </View>
    </View>
);

export default ProfessionalSummary;
