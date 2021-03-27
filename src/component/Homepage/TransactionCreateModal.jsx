import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Checkbox,
  FormHelperText,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useManikoStore } from '../ManikoProvider';

const TransactionCreateModal = ({ isOpen, onClose }) => {
  const { templates, updateTransactions } = useManikoStore();
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const onSubmit = (data) => {
    updateTransactions(data);
    onClose();
  };
  const chosenTemplate = templates ? templates.find((template) => watch('template') === template.id) : null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="25px" mb="0px">
        <ModalHeader>Create Transaction</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          { templates
            && (
            <FormControl id="template" mb="15px">
              <FormLabel textTransform="uppercase">Choose From Template</FormLabel>
              <Select name="template" borderColor="black" ref={register({ required: true })}>
                <option disabled selected>Choose a Template</option>
                {
                  templates.map(({ id, name }) => (
                    <option key={id} defaultValue={id}>{name}</option>
                  ))
                }
              </Select>
            </FormControl>
            )}
          <FormControl id="name" mb="15px">
            <FormLabel textTransform="uppercase">Name</FormLabel>
            <Input type="text" name="name" defaultValue={chosenTemplate && chosenTemplate.name} ref={register({ required: true, maxLength: 30 })} />
            {errors.after30thSalary && <FormHelperText color="red.300">There should be a name less than 30 characters.</FormHelperText> }
          </FormControl>
          <FormControl id="amount" mb="15px">
            <FormLabel textTransform="uppercase">Amount</FormLabel>
            <Input type="number" name="value" defaultValue={chosenTemplate && chosenTemplate.value} ref={register({ required: true, min: 1 })} />
            {errors.after30thSalary && <FormHelperText color="red.300">Value should be greater than 0.</FormHelperText> }
          </FormControl>
          <FormControl id="schedule" mb="15px">
            <FormLabel textTransform="uppercase">Schedule</FormLabel>
            <Select name="schedule" ref={register} defaultValue={chosenTemplate && chosenTemplate.schedule}>
              <option selected value="30th">AFTER 30TH</option>
              <option value="15th">AFTER 15TH</option>
            </Select>
          </FormControl>
          <FormControl id="schedule" mb="15px">
            <FormLabel textTransform="uppercase">Transaction Type</FormLabel>
            <Select name="type" ref={register} defaultValue={chosenTemplate && chosenTemplate.type}>
              <option selected value="cash">CASH</option>
              <option value="credit">CREDIT</option>
            </Select>
          </FormControl>
          {
            !chosenTemplate
            && (
            <Checkbox name="isTemplate" ref={register}>
              Save as Template
            </Checkbox>
            )
          }
        </ModalBody>
        <ModalFooter>
          <Button bgColor="red.100" mr={3} onClick={handleSubmit(onSubmit)} color="white">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default TransactionCreateModal;
