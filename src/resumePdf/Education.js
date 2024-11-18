import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

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
        fontSize: '16px',
        marginTop: '5px'

    },
    institutionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '10px'
    },
    degreeName: {
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
        fontSize: '12px',
        marginBottom: 1,

    },
    dates: {
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
        fontSize: '10px',
        marginBottom: 1,

    },
    institutionName: {
        fontSize: '10px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
        marginBottom: '1px'
    },
    description: {
        fontSize: '9px',
        fontFamily: 'TimesNewRoman',
        fontWeight:'normal',
        // color: '#333',
        marginTop:'5px',
    }
});

const Education = () => (
    <View>
        <Text style={styles.headings}>Education & Qualification</Text>
        <View style={styles.horizontalLine}></View>
        <View>
            <View>

                <View style={styles.institutionContainer}>

                    <Text style={styles.degreeName}>Bachelors in Computer Science</Text>
                    <Text style={styles.dates}>Sept 2019 - July 2024</Text>
                </View>
                <View>
                    <Text style={styles.institutionName}>Kathmandu University, Dhulikhel</Text>
                    <Text style={styles.description}>
                        Relevant Courses: Data Structures, Algorithms, Web Development, Database Systems, Machine Learning.
                        Graduated with a focus on full-stack development and software engineering principles.
                    </Text>

                </View>

            </View>


            <View style={{ marginTop: '5px' }}>

                <View style={styles.institutionContainer}>

                    <Text style={styles.degreeName}>10 +2 </Text>
                    <Text style={styles.dates}>July 2017 - Apr 2019</Text>
                </View>
                <View>
                    <Text style={styles.institutionName}>Nepal Police School, Sanga, Kavre</Text>
                </View>

            </View>
            <View style={{ marginTop: '5px' }}>

                <View style={styles.institutionContainer}>

                    <Text style={styles.degreeName}>SEE </Text>
                    <Text style={styles.dates}>Apr 2012 - Apr 2017</Text>
                </View>
                <View>
                    <Text style={styles.institutionName}>Nepal Police School, Sanga, Kavre</Text>
                </View>

            </View>
        </View>


    </View>
);

export default Education;
