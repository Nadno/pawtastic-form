import React, { useEffect, useState } from 'react';

import useForm from '../../utils/useForm';
import { useStep } from '../../contexts/useStep';
import validate from '../../utils/validate';

import { MyFormData } from '../../types/form';

import Fieldset from '../../layouts/Fieldset';
import Button from '../Button';
import DefaultInput from '../DefaultInput';
import Checkbox from '../Checkbox';
import Select from '../Select';
import PetType from '../PetType';

import './index.scss';
import getInputNames from '../../utils/setInputNames';
import PhotoInput from '../PhotoInput';

const Form = () => {
  const { step, next, back } = useStep(0, 6);
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    checkInputs,
  } = useForm<MyFormData>({
    initialValues: {
      zipCode: '',
      email: '',
      password: '',
      confirm: '',
      policy: false,
      firstName: '',
      lastName: '',
      phone: '',
      altPhone: '',
      cpf: '',
      petType: '',
      petName: '',
      petBreed: '',
      petBirthday: '',
    },
    validate,
  });

  const [inputNames, setInputNames] = useState<string[]>([]);

  useEffect(() => {
    const names = getInputNames(step);
    setInputNames(names);
  }, [step]);

  const nextStep = () => {
    const error = checkInputs(inputNames);
    console.log(error);
    if (error) return;

    next();
  };

  return (
    <form id="pawtasticForm" onSubmit={handleSubmit} className="form">
      <Fieldset
        id="first"
        hidden={step !== 0}
        title="First, let's make sure we serve your area."
      >
        <DefaultInput
          id="zip-code"
          name="zipCode"
          label="Zip code"
          value={values.zipCode}
          handleChange={handleChange}
          placeholder="Enter your answer"
        />
      </Fieldset>

      <Fieldset
        hidden={step !== 1}
        title="Good news! We care for pets in your area. Let's"
      >
        <DefaultInput
          type="email"
          id="email"
          name="email"
          label="E-mail"
          value={values.email}
          error={errors?.email}
          handleChange={handleChange}
          placeholder="Enter your e-mail"
        />

        <div className="step__field-block">
          <DefaultInput
            type="password"
            id="password"
            name="password"
            label="Password"
            value={values.password}
            error={errors?.password}
            handleChange={handleChange}
            placeholder="••••••••"
          />
          <DefaultInput
            type="password"
            id="confirm"
            name="confirm"
            label="Confirm password"
            value={values.confirm}
            error={errors?.confirm}
            handleChange={handleChange}
            placeholder="••••••••"
          />
        </div>

        <Checkbox
          id="policy"
          name="policy"
          value={values.policy}
          error={errors?.policy}
          handleChange={handleChange}
          label="I have read the Privacy and agree to the Terms of Service."
        />
      </Fieldset>

      <Fieldset
        hidden={step !== 2}
        title="Hello! Please tell us a little bit about yourself."
      >
        <div className="step__field-block">
          <DefaultInput
            id="first-name"
            name="firstName"
            label="First name"
            value={values?.firstName}
            error={errors?.firstName}
            handleChange={handleChange}
            placeholder="Your first name"
          />
          <DefaultInput
            id="last-name"
            name="lastName"
            label="Last name"
            value={values?.lastName}
            error={errors?.lastName}
            handleChange={handleChange}
            placeholder="Your last name"
          />
        </div>

        <div className="step__field-block">
          <DefaultInput
            id="phone"
            name="phone"
            label="Phone"
            value={values?.phone}
            error={errors?.phone}
            handleChange={handleChange}
            placeholder="01 90000-0000"
          />
          <DefaultInput
            id="alt-phone"
            name="altPhone"
            label="Phone alt"
            value={values?.altPhone}
            error={errors?.altPhone}
            handleChange={handleChange}
            placeholder="01 90000-0000"
          />
        </div>

        <DefaultInput
          id="cpf"
          name="cpf"
          label="CPF"
          value={values?.cpf}
          error={errors?.cpf}
          handleChange={handleChange}
          placeholder="000.000.000-00"
        />
      </Fieldset>

      <Fieldset
        hidden={step !== 3}
        title={
          <>
            Nice to meet you, Name. <br />
            Tell us all about your furry, feathery, or scaley friend.
          </>
        }
      >
        <Select
          id="pet-type"
          title="Kind of your pet"
          error={errors?.petType}
          columns={4}
        >
          <Select.Option
            id="dog"
            name="petType"
            label="Dog"
            handleChange={handleChange}
          >
            <PetType type="dog" />
          </Select.Option>
          <Select.Option
            id="cat"
            name="petType"
            label="Cat"
            handleChange={handleChange}
          >
            <PetType type="cat" />
          </Select.Option>
          <Select.Option
            id="birdy"
            name="petType"
            label="Birdy"
            handleChange={handleChange}
          >
            <PetType type="birdy" />
          </Select.Option>
          <Select.Option
            id="hamster"
            name="petType"
            label="Hamster"
            handleChange={handleChange}
          >
            <PetType type="hamster" />
          </Select.Option>
        </Select>

        <span className="step__info">
          Have multiple pets? That’s awesome. You can create
          <br />
          additional pet profiles for the whole family later.
        </span>
      </Fieldset>

      <Fieldset
        hidden={step !== 4}
        title="Yay, we love dogs! Give us the basics about your pup."
      >
        <div className="step__field-block">
          <DefaultInput
            type="text"
            id="pet-name"
            name="petName"
            label="Name"
            value={values.petName}
            error={errors?.petName}
            handleChange={handleChange}
            placeholder="Pet's name"
          />

          <PhotoInput />
        </div>

        <div className="step__field-block">
          <DefaultInput
            type="text"
            id="pet-breed"
            name="petBreed"
            label="Breed"
            value={values.petBreed}
            error={errors?.petBreed}
            handleChange={handleChange}
            placeholder="Pet's breed"
          />
          <DefaultInput
            type="date"
            id="pet-birthday"
            name="petBirthday"
            label="Birthday"
            value={values.petBirthday}
            error={errors?.petBirthday}
            handleChange={handleChange}
            placeholder="Pet's birthday"
          />
        </div>

        <div className="step__field-block">
          <Select
            id="pet-gender"
            title="Gender"
            error={errors?.petGender}
            columns={2}
          >
            <Select.Option
              id="male"
              name="petGender"
              label="Male"
              handleChange={handleChange}
            />

            <Select.Option
              id="female"
              name="petGender"
              label="Female"
              handleChange={handleChange}
            />
          </Select>
          <Select
            id="pet-spayed-or-neutered"
            title="Spayed or Neutered"
            error={errors?.petSpayedOrNeutered}
            columns={2}
          >
            <Select.Option
              id="SONYes"
              label="Yes"
              name="petSpayedOrNeutered"
              handleChange={handleChange}
            />

            <Select.Option
              id="SONNo"
              label="No"
              name="petSpayedOrNeutered"
              handleChange={handleChange}
            />
          </Select>
        </div>

        <Select
          id="pet-weight"
          title="Weight"
          error={errors?.petWeight}
          columns={4}
        >
          <Select.Option
            id="5/10"
            label="5/10"
            name="petWeight"
            handleChange={handleChange}
          />

          <Select.Option
            id="10/15"
            label="10/15"
            name="petWeight"
            handleChange={handleChange}
          />
          <Select.Option
            id="15/20"
            label="15/20"
            name="petWeight"
            handleChange={handleChange}
          />
          <Select.Option
            id="20/25"
            label="20/25"
            name="petWeight"
            handleChange={handleChange}
          />
        </Select>
      </Fieldset>

      <Fieldset
        hidden={step !== 5}
        title="Thanks! Now give us all the details about Ginger."
      >
        <div id="favorite-things" title="Favorite things">
          <Checkbox
            id="select-all"
            name="favorite-things"
            label="Select all"
            handleChange={handleChange}
          />
          <Checkbox
            id="kisses"
            name="favorite-things"
            label="Giving kisses"
            handleChange={handleChange}
          />
          <Checkbox
            id="walk"
            name="favorite-things"
            label="Walks"
            handleChange={handleChange}
          />
          <Checkbox
            id="barking"
            name="favorite-things"
            label="Barking"
            handleChange={handleChange}
          />
          <Checkbox
            id="snuggling"
            name="favorite-things"
            label="Snuggling"
            handleChange={handleChange}
          />
          <Checkbox
            id="treats"
            name="favorite-things"
            label="Treats"
            handleChange={handleChange}
          />
          <Checkbox
            id="playing-fetch"
            name="favorite-things"
            label="Playing fetch"
            handleChange={handleChange}
          />
          <Checkbox
            id="naps"
            name="favorite-things"
            label="Naps"
            handleChange={handleChange}
          />
          <Checkbox
            id="toys"
            name="favorite-things"
            label="Toys"
            handleChange={handleChange}
          />
        </div>

        <div className="text__field">
          <label htmlFor="pet-detail" className="input__title">
            Something that we must know?
          </label>
          <textarea
            name="pet-detail"
            id="pet-detail"
            maxLength={200}
            placeholder="Type here"
          ></textarea>
        </div>
      </Fieldset>

      <Fieldset
        hidden={step !== 6}
        title="Okay, Ginger's all set! We can't wait to meet het."
      ></Fieldset>

      <footer className="form__footer">
        <div className="step__buttons">
          <Button onClick={back} id="back-btn" disabled>
            Back
          </Button>
          <Button onClick={nextStep} type="submit">
            Next
          </Button>
        </div>
        <p className="member">
          Already a member? <a href="/">Log in</a>
        </p>
      </footer>
    </form>
  );
};

export default Form;
