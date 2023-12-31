
import React, { useState } from 'react';

// Chakra imports
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
    Select,
} from "@chakra-ui/react";
import axios from "axios";
import { Formik, Form, Field } from 'formik';

export default function Prediction() {
    const [returnProb, setReturnProb] = useState(null);

    return (
        <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
            <Formik
                initialValues={{ 
                    building_type: 'Commercial',
                    sprinkler_system_present: 'Yes',
                    fire_safety_training_conducted: 'Yes',
                    nearest_fire_station_location: 'North',
                    types_of_nearby_buildings: 'Residential',
                    electrical_equipment_inspection_conducted: 'Yes',
                    gas_equipment_inspection_conducted: 'Yes',
                    recent_repair_replacement_history: 'Over 3 years',
                    month: 5,
                    building_age: 20,
                    building_area_sqm: 665,
                    building_height_m: 5,
                    number_of_floors: 1,
                    number_of_emergency_exits: 2,
                    number_of_fire_alarms: 2,
                    width_of_nearby_roads_m: 10,
                    distance_to_nearby_buildings_m: 20,
                    temperature_c: 25,
                    humidity: 60,
                    wind_speed_ms: 4.16,
                    precipitation_mm: 10.45
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.setSubmitting(false);
                        axios
                            .post("http://144.126.242.191:36000/predict", values, {
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            })
                            .then((response) => {
                                console.log(response);
                                setReturnProb(response.data["Result"]);
                            });
                    }, 400);
                }}
            >
                {(props) => (
                    <Form>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="building_type" id="building_type" style={{ marginBottom: "10px" }} htmlFor="building_type">
                                    <FormLabel>Building Type</FormLabel>
                                    <Select name="building_type" id="building_type" onChange={props.handleChange} placeholder='Select the building type' defaultValue='Commercial'>
                                        <option value="Commercial">Commercial</option>
                                        <option value="Industrial">Industrial</option>
                                        <option value="Residential">Residential</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="sprinkler_system_present" id="sprinkler_system_present" style={{ marginBottom: "10px" }} htmlFor="sprinkler_system_present">
                                    <FormLabel>Sprinkler System Present</FormLabel>
                                    <Select name="sprinkler_system_present" id="sprinkler_system_present" onChange={props.handleChange} placeholder='Select if the sprinkler system is present' defaultValue='Yes'>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="fire_safety_training_conducted" id="fire_safety_training_conducted" style={{ marginBottom: "10px" }} htmlFor="fire_safety_training_conducted">
                                    <FormLabel>Fire Safety Training Conducted</FormLabel>
                                    <Select name="fire_safety_training_conducted" id="fire_safety_training_conducted" onChange={props.handleChange} placeholder='Select if the fire safety training is conducted' defaultValue='Yes'>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="nearest_fire_station_location" id="nearest_fire_station_location" style={{ marginBottom: "10px" }} htmlFor="nearest_fire_station_location">
                                    <FormLabel>Nearest Fire Station Location</FormLabel>
                                    <Select name="nearest_fire_station_location" id="nearest_fire_station_location" onChange={props.handleChange} placeholder='Select the nearest fire station location' defaultValue='North'>
                                        <option>North</option>
                                        <option>East</option>
                                        <option>South</option>
                                        <option>West</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="types_of_nearby_buildings" id="types_of_nearby_buildings" style={{ marginBottom: "10px" }} htmlFor="types_of_nearby_buildings">
                                    <FormLabel>Types of Nearby Buildings</FormLabel>
                                    <Select name="types_of_nearby_buildings" id="types_of_nearby_buildings" onChange={props.handleChange} placeholder='Select the nearby buildings type' defaultValue='Residential'>
                                        <option>Residential</option>
                                        <option>Public</option>
                                        <option>Industrial</option>
                                        <option>Commercial</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="electrical_equipment_inspection_conducted" id="electrical_equipment_inspection_conducted" style={{ marginBottom: "10px" }} htmlFor="electrical_equipment_inspection_conducted">
                                    <FormLabel>Electrical Equipment Inspection Conducted</FormLabel>
                                    <Select name="electrical_equipment_inspection_conducted" id="electrical_equipment_inspection_conducted" onChange={props.handleChange} placeholder='Select if the electrical equipment inspection is conducted' defaultValue='Yes'>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="gas_equipment_inspection_conducted" id="gas_equipment_inspection_conducted" style={{ marginBottom: "10px" }} htmlFor="gas_equipment_inspection_conducted">
                                    <FormLabel>Gas Equipment Inspection Conducted</FormLabel>
                                    <Select name="gas_equipment_inspection_conducted" id="gas_equipment_inspection_conducted" onChange={props.handleChange} placeholder='Select if the gas equipment inspection is conducted' defaultValue='Yes'>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="recent_repair_replacement_history" id="recent_repair_replacement_history" style={{ marginBottom: "10px" }} htmlFor="recent_repair_replacement_history">
                                    <FormLabel>Recent Repair Replacement History</FormLabel>
                                    <Select name="recent_repair_replacement_history" id="recent_repair_replacement_history" onChange={props.handleChange} placeholder='Select the last year of repairment' defaultValue='Over 3 years'>
                                        <option>None</option>
                                        <option>Over 3 years</option>
                                        <option>Within 1 year</option>
                                        <option>1-3 years</option>
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="month" id="month" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="month">
                                    <FormLabel>Month</FormLabel>
                                    <NumberInput max={12} min={1} defaultValue={5} name="month" id="month" onChange={props.handleChange}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="building_age" id="building_age" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="building_age">
                                    <FormLabel>Building age</FormLabel>
                                    <Input type='number' defaultValue={20} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="building_area_sqm" id="building_area_sqm" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="building_area_sqm">
                                    <FormLabel>Building area (sqm)</FormLabel>
                                    <Input type='number' defaultValue={665} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="building_height_m" id="building_height_m" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="building_height_m">
                                    <FormLabel>Building height (m)</FormLabel>
                                    <Input type='number' defaultValue={5} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="number_of_floors" id="number_of_floors" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="number_of_floors">
                                    <FormLabel>Number of floors</FormLabel>
                                    <NumberInput max={100} min={1} defaultValue={1}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="number_of_emergency_exits" id="number_of_emergency_exits" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="number_of_emergency_exits">
                                    <FormLabel>Number of emergency exits</FormLabel>
                                    <NumberInput max={50} min={1} defaultValue={2}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="number_of_fire_alarms" id="number_of_fire_alarms" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="number_of_fire_alarms">
                                    <FormLabel>Number of fire alarms</FormLabel>
                                    <Input type='number' defaultValue={2} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="width_of_nearby_roads_m" id="width_of_nearby_roads_m" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="width_of_nearby_roads_m">
                                    <FormLabel>Number of nearby roads</FormLabel>
                                    <Input type='number' defaultValue={10} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="distance_to_nearby_buildings_m" id="distance_to_nearby_buildings_m" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="distance_to_nearby_buildings_m">
                                    <FormLabel>Distance of nearby buildings (m)</FormLabel>
                                    <Input type='number' defaultValue={20} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="temperature_c" id="temperature_c" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="temperature_c">
                                    <FormLabel>Temperature (C)</FormLabel>
                                    <Input type='number' defaultValue={25}/>
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="humidity" id="humidity" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="humidity">
                                    <FormLabel>Humidity (%)</FormLabel>
                                    <Input type='number' defaultValue={60} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="wind_speed_ms" id="wind_speed_ms" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="wind_speed_ms">
                                    <FormLabel>Wind Speed (m/s)</FormLabel>
                                    <Input type='number' defaultValue={4.16} />
                                </FormControl>
                            )}
                        </Field>
                        <Field>
                            {({ field, form }) => (
                                <FormControl name="precipitation_mm" id="precipitation_mm" onChange={props.handleChange} style={{ marginBottom: "10px" }} htmlFor="precipitation_mm">
                                    <FormLabel>Precipitation (mm)</FormLabel>
                                    <Input type='float' defaultValue={10.45} />
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={props.isSubmitting}
                            type='submit'
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
            {
                returnProb != null &&
                <Box>
                    <Text style={{margin: "10px"}}>Probability of small, medium and large damage scale of fire is respectively: {returnProb}</Text>
                </Box>
            }
        </Box>
    );
}