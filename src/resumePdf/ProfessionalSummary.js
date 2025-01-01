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
            Frontend Developer with 2+ years of experience developing and maintaining high performance, user-friendly and responsive web applications using ReactJS. Proficient in HTML5, CSS3, JavaScript (ES6+), asynchronous request handling, Git, Material-UI, Bootstrap and RESTful APIs with proven track record of optimizing performance, usability, and accessibility by working closely with UI/UX designers and backend developers to implement sleek user interfaces. Skilled in testing cross-browser compatibility, mobile responsiveness, and scalability, with a proven ability to debug complex issues and propose innovative performance enhancements. Also demonstrated expertise in maintaining high-quality coding standards through thorough testing, code reviews, and attach to best practices within the team.
                        </Text>
        </View>
    </View>
);

export default ProfessionalSummary;
