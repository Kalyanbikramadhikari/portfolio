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

const WorkExperience = () => (
    <View>
        <Text>Work Experience</Text>
        <View style={styles.horizontalLine}></View>
        <View>
            <View>
                <View>
                    <View style={styles.WorkPlace}>
                        <Text>TechGlazers Pvt. Ltd.</Text>
                        <Text>Jun 2024 - PRESENT</Text>
                    </View>
                    <Text style={styles.designation}>Frontend Developer</Text>
                </View>
                <View>
                    <Text style={styles.works}>Worked in data caching, reducing the multiple database hits from frontend by <Text>40%</Text></Text>
                    <Text style={styles.works}> Implemented debouncing for search and input field, reducing re-renders of the components by more than <Text>200%</Text></Text>
                    <Text style={styles.works}>Developed the applications with as given by designer and implemented transation effects <Text>200%</Text></Text>
                    <Text style={styles.works}>Implemented pessimistic updates and reducing manual reload of page on update or reduced the use of window function to reload by <Text>100%</Text></Text>
                    <Text style={styles.works}>Developed pdfs as per requirement and increasing the client satisfaction by <Text>30%</Text></Text>
                    <Text style={styles.works}>Implemented responsive designs across various devices and reduced device specific bugs by <Text>60%</Text></Text>
                </View>

            </View>

            <View>
                <View>
                    <View style={styles.WorkPlace}>
                        <Text>Techore Solutions</Text>
                        <Text>Nov 2022 - Jan 2024</Text>
                    </View>
                    <Text style={styles.designation}>Frontend Developer</Text>
                </View>
                <View>
                    <Text style={styles.works} >Integrated responsive design principles and turned static web pages into dynamic ones, reducing device-specific bugs by <Text>35%</Text></Text>
                    <Text style={styles.works}>Achieved a significant reduction of up to 40% in loading time by optimizing components and effectively using React lifecycle methods <Text>200%</Text></Text>
                    <Text style={styles.works}>Increased user experience by 30% using different React packages. <Text>200%</Text></Text>
                    <Text style={styles.works}>Successfully applied Agile methodologies, especially [Sprint, Kanban], which increased task completion by 45%. <Text>100%</Text></Text>
                    {/* <Text style={styles.works}>Developed pdfs as per requirement and increasing the client satisfaction by <Text>30%</Text></Text>
                    <Text style={styles.works}>Implemented responsive designs across various devices and reduced device specific bugs by <Text>60%</Text></Text> */}
                </View>

            </View>

            <View>
                <View>
                    <View style={styles.WorkPlace}>
                        <Text>TechGlazers Pvt. Ltd.</Text>
                        <Text>Jun 2024 - PRESENT</Text>
                    </View>
                    <Text style={styles.designation}>Frontend Developer</Text>
                </View>
                <View>
                    <Text style={styles.works}>Developed 2 responsive websites compatible with mobile, PC, and tablet screens. </Text>
                    <Text style={styles.works}>Introduced new plug-ins and extensions to make the website more usable and interactive, increasing satisfaction by 35%. <Text>200%</Text></Text>
                    <Text style={styles.works}>Updated websites as instructed by the research head to introduce new features and content. <Text>200%</Text></Text>
                    {/* <Text style={styles.works}>Implemented pessimistic updates and reducing manual reload of page on update or reduced the use of window function to reload by <Text>100%</Text></Text>
                    <Text style={styles.works}>Developed pdfs as per requirement and increasing the client satisfaction by <Text>30%</Text></Text>
                    <Text style={styles.works}>Implemented responsive designs across various devices and reduced device specific bugs by <Text>60%</Text></Text> */}
                </View>

            </View>
        </View>
    </View>
);

export default WorkExperience;
