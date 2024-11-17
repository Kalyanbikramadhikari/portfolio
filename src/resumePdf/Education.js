import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    horizontalLine: {
        marginTop: '3px',
        borderBottom: '1px solid black'
    },
    institutionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '10px'
    },
    description: {
        fontSize: 9,
        color: '#333',
        marginTop: 2,
    }
});

const Education = () => (
    <View>
        <Text>Education & Qualification</Text>
        <View style={styles.horizontalLine}></View>
        <View>
            <View>

                <View style={styles.institutionContainer}>

                    <Text>Bachelors in Computer Science</Text>
                    <Text>Sept 2019 - July 2024</Text>
                </View>
                <View>
                    <Text>Kathmandu University, Dhulikhel</Text>
                    <Text style={styles.description}>
                        Relevant Courses: Data Structures, Algorithms, Web Development, Database Systems, Machine Learning.
                        Graduated with a focus on full-stack development and software engineering principles.
                    </Text>

                </View>

            </View>


            <View>

                <View style={styles.institutionContainer}>

                    <Text>10 +2 </Text>
                    <Text>July 2017 - Apr 2019</Text>
                </View>
                <View>
                    <Text>Nepal Police School, Sanga, Kavre</Text>
                </View>

            </View>
            <View>

                <View style={styles.institutionContainer}>

                    <Text>SEE </Text>
                    <Text>Apr 2012 - Apr 2017</Text>
                </View>
                <View>
                    <Text>Nepal Police School, Sanga, Kavre</Text>
                </View>

            </View>
        </View>


    </View>
);

export default Education;
