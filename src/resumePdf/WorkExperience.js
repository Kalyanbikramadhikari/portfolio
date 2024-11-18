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
    WorkPlace: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '10px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
    },
    worksList: {
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
        marginLeft: '4px'
        // gap:'1px'
    },
    works: {
        fontSize: '9px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
        marginBottom: '1px'
    },
    headings: {
        // fontSize:'12px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
        fontSize: '16px',
        marginTop: '5px'

    },
    CompanyName: {
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
    designation: {
        fontSize: '10px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold',
        marginBottom: '1px'
    },
    bulletPoint: {
        flexDirection: 'row',
        fontSize: 10,
        marginBottom: 1,
        gap: 2,
        marginLeft: 4,


    },
    bullet: {
        width: 6,
        fontSize: 10,
    },


});

const WorkExperience = () => (
    <View>
        <Text style={styles.headings}>Work Experience</Text>
        <View style={styles.horizontalLine}></View>
        <View>
            <View>
                <View>
                    <View style={styles.WorkPlace}>
                        <Text style={styles.CompanyName}>TechGlazers Pvt. Ltd.</Text>
                        <Text style={styles.dates}>Jun 2024 - PRESENT</Text>
                    </View>
                    <Text style={styles.designation}>Frontend Developer</Text>
                </View>
                {/* <View style={styles.worksList}> */}
                <View >

                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Worked in data caching, reducing the multiple database hits from frontend by <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>40%</Text></Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}> Implemented debouncing for search and input field, reducing re-renders of the components by more than <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>200%</Text></Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Developed the applications with as given by designer and implemented transation effects <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>200%</Text></Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Implemented pessimistic updates and reducing manual reload of page on update or reduced the use of window function to reload by <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>100%</Text></Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Developed pdfs as per requirement and increasing the client satisfaction by <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>30%</Text></Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Implemented responsive designs across various devices and reduced device specific bugs by <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>60%</Text></Text>

                    </View>
                </View>

            </View>

            <View>
                <View style={{ marginTop: '5px' }}>
                    <View style={styles.WorkPlace}>
                        <Text style={styles.CompanyName}>Techore Solutions</Text>
                        <Text style={styles.dates}>Nov 2022 - Jan 2024</Text>
                    </View>
                    <Text style={styles.designation}>Frontend Developer</Text>
                </View>
                <View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works} >Integrated responsive design principles and turned static web pages into dynamic ones, reducing device-specific bugs by <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>35%</Text></Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Achieved a significant reduction of up to <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>40%</Text> in loading time by optimizing components and effectively using React lifecycle methods </Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Increased user experience by<Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>30%</Text> using different React packages. </Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Successfully applied Agile methodologies, especially [Sprint, Kanban], which increased task completion by<Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>  45%.</Text></Text>

                    </View>
                    {/* <Text style={styles.works}>Developed pdfs as per requirement and increasing the client satisfaction by <Text>30%</Text></Text>
                    <Text style={styles.works}>Implemented responsive designs across various devices and reduced device specific bugs by <Text>60%</Text></Text> */}
                </View>

            </View>

            <View>
                <View style={{ marginTop: '5px' }}>
                    <View style={styles.WorkPlace}>
                        <Text style={styles.CompanyName}>Digital Learning Research Lab</Text>
                        <Text style={styles.dates}>Feb 2024 - April 2024</Text>
                    </View>
                    <Text style={styles.designation}>Web Developer</Text>
                </View>
                <View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Developed <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>2 responsive websites</Text> compatible with mobile, PC, and tablet screens. </Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Introduced new plug-ins and extensions to make the website more usable and interactive, increasing satisfaction by <Text style={{fontFamily: 'TimesNewRoman',fontWeight: 'bold',}}>35%</Text></Text>

                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.works}>Updated websites as instructed by the research head to introduce new features and content.</Text>

                    </View>
                    {/* <Text style={styles.works}>Implemented pessimistic updates and reducing manual reload of page on update or reduced the use of window function to reload by <Text>100%</Text></Text>
                    <Text style={styles.works}>Developed pdfs as per requirement and increasing the client satisfaction by <Text>30%</Text></Text>
                    <Text style={styles.works}>Implemented responsive designs across various devices and reduced device specific bugs by <Text>60%</Text></Text> */}
                </View>

            </View>
        </View>
    </View>
);

export default WorkExperience;
