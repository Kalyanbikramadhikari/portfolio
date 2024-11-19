import React from 'react';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Font } from '@react-pdf/renderer';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Project1 from './Projects';

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
    pdfViewer: {
        width: '100vw',  // Full width of the viewport
        height: '100vh', // Full height of the viewport
        border: '2px solid #E4E4E4'
    },
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        // width: '100%',  // Ensure it uses the full width
        height: '100%', // Ensure it uses the full height
        // border:'2px solid #000000'

    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    name: {
        display: 'flex',
        textAlign: 'center',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
        fontSize: '26px',
        marginBottom: '5px'
    },
    links: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '9px',
        // border: '2px solid #000000',
        justifyContent: 'center',
        columnGap: '5px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
        fontFamily: 'TimesNewRoman',
        // fontWeight: 'normal'

    },
    socialmedia: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '7px',
        alignItems: 'center',
        columnGap: '3px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal'


    },
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
    skillsList: {
        fontSize: '8px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
        gap: '1px'
    },
    skillName: {
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
    },
    skillItem: {
        flexDirection: 'row',
        gap: '5px',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'normal',
        marginBottom:'1px'
    },
    skillTitle: {
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold'
    }

});


// Create Document Component
const ResumeDocument = () => (
    <PDFViewer style={styles.pdfViewer}>
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    {/* header section */}
                    <View>
                        <Text style={styles.name}>Kalyan Bikram Adhikari</Text>
                        <View style={styles.links}>
                            <View style={styles.socialmedia}>
                                <Image src="/assets/images/portfolio.png" style={{ height: '10px', width: '10px' }}></Image>
                                <Text>https://kalyanbikramadhikari.netlify.app/</Text>

                            </View>
                            <View style={styles.socialmedia}>
                                <Image src="/assets/images/linkedIn.png" style={{ height: '10px', width: '10px' }}></Image>
                                <Text> https://github.com/Kalyanbikramadhikari/</Text>

                            </View>
                            <View style={styles.socialmedia}>
                                <Image src="/assets/images/github.png" style={{ height: '10px', width: '10px' }}></Image>
                                <Text>https://www.linkedin.com/in/kalyan-bikram-adhikari-495907266/</Text>

                            </View>





                        </View>
                        <View style={styles.links}>

                            <View style={styles.socialmedia}>
                                <Image src="/assets/images/gmail.png" style={{ height: '10px', width: '10px' }}></Image>
                                <Text> kalyanad100@gmail.com</Text>

                            </View>
                        </View>
                    </View>
                    {/* Skills Section */}
                    <View>
                        {/* <Text styles={{fontFamily:'TimesNewRoman', fontWeight:'bold', fontSize:'5px'}}>Skills</Text> */}
                        <Text style={styles.headings}>Skills</Text>
                        <View style={styles.horizontalLine}></View>
                        <View style={styles.skillsList}>
                            <View style={styles.skillItem}>

                                <Text style={styles.skillTitle}>Frontend Development:</Text>
                                <Text style={styles.skillName}>ReactJS, JavaScript, HTML5, CSS3, Redux Toolkit, Material UI, Tailwind CSS,Async/Await</Text>
                            </View>
                            <View style={styles.skillItem}>

                                <Text style={styles.skillTitle}>Backend Development:</Text>
                                <Text style={styles.skillName}> Node.js, Express</Text>
                            </View>
                            <View style={styles.skillItem}>

                                <Text style={styles.skillTitle}>Database Management:</Text>
                                <Text style={styles.skillName}>MongoDB, MYSQL</Text>
                            </View>
                            <View style={styles.skillItem}>

                                <Text style={styles.skillTitle}>Tools & Libraries:</Text>
                                <Text style={styles.skillName}>ReactQuill, GSAP, Axios, React Hook Form, React PDF</Text>
                            </View>
                            <View style={styles.skillItem}>

                                <Text style={styles.skillTitle}>Version Control:</Text>
                                <Text style={styles.skillName}>Git, Github</Text>
                            </View>
                            <View style={styles.skillItem}>

                                <Text style={styles.skillTitle}>Other Skills:</Text>
                                <Text style={styles.skillName}>Ability to write clean,modern,testable & well documented code,Advanced english fluency, Professional, empathic & team player, Problem solver</Text>
                            </View>
                            
                        </View>
                    </View>

                    {/* work experience */}
                    <WorkExperience />

                    {/* Education */}
                    <Education />
                    <Project1 />
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default ResumeDocument;
