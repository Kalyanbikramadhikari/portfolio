import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    horizontalLine: {
        marginTop: '3px',
        borderBottom: '1px solid black'
    },
    bulletPoint: {
        flexDirection: 'row',
        fontSize: 10,
        marginBottom: 2,
    },
    bullet: {
        width: 6,
        fontSize: 10,
    },
    link: {
        fontSize: 10,
        color: 'blue',
    },
});

// Project component
const Project1 = () => (
    <View>




        <Text>Projects</Text>
        <View style={styles.horizontalLine}></View>

        <View>
            <Text style={styles.projectTitle}>Project 1 [Base64 to Image Converter]</Text>

            <View>
                <View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Developed an efficient Base64 to Image Converter library that seamlessly converts Base64-encoded strings into usable image URLs, enhancing image handling in client-side applications.
                        </Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Implemented direct storage of converted image data in the local state, eliminating the need for complex file storage paths and reducing server load.
                        </Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Simplified image management in React projects by eliminating the need to save images to specific directories, streamlining front-end development workflows.
                        </Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Enhanced the user experience by offering a straightforward API for converting and rendering images directly from Base64-encoded data, making it easier to handle user-uploaded images.
                        </Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Contributed to the open-source community by providing a lightweight, reusable, and optimized solution for Base64 image conversion, compatible with various front-end frameworks.
                        </Text>
                    </View>
                </View>

                {/* GitHub Link */}
                <Link style={styles.link} src="https://github.com/Kalyanbikramadhikari/base64-to-image">
                    GitHub: https://github.com/Kalyanbikramadhikari/base64-to-image
                </Link>
            </View>
        </View>


        <View>
            <Text style={styles.projectTitle}>Project 1 [exploreLive]</Text>

            <View>
                <View style={styles}>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>Developed a platform to book various homestays across the country.</Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Leveraged React framework along with React Redux for state management,
                            React-Toastify for notifications, React Toolkit for efficient Redux management,
                            and Material UI for UI components.
                        </Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Reduced user errors by 20% by implementing a user-friendly interface.
                        </Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Enabled users to find the perfect homestay 40% faster with diverse filtering options.
                        </Text>
                    </View>
                    <View style={styles.bulletPoint}>
                        <Text style={styles.bullet}>•</Text>
                        <Text>
                            Integrated Stripe for seamless and secure payment processing.
                        </Text>
                    </View>
                </View>

                {/* GitHub Link */}
                <Link style={styles.link} src="https://github.com/Kalyanbikramadhikari/exploreLive">
                    GitHub: https://github.com/Kalyanbikramadhikari/exploreLive
                </Link>
            </View>

        </View>


    </View>
);

export default Project1;
