import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import useForm from '../../utils/useForm';
import { useStep } from '../../contexts/useStep';
import validate from '../../utils/validate';
import getInputNames from '../../utils/setInputNames';

import { MyFormData } from '../../types/form';

import Fieldset from '../../layouts/Fieldset';
import Button from '../Button';
import DefaultInput from '../DefaultInput';
import Checkbox from '../Checkbox';
import Select, { Option } from '../Select';
import PetType from '../PetType';
import PhotoInput from '../PhotoInput';
import Textarea from '../Textarea';

import './index.scss';

const Form = () => {
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
      petPhoto: { name: '' },
      petGender: '',
      petSpayedOrNeutered: '',
      petWeight: '',
    },
    validate,
  });

  const { step, next, back } = useStep(0, 6);
  const [inputNames, setInputNames] = useState<string[]>([]);

  useEffect(() => {
    const names = getInputNames();
    setInputNames(names);
  }, [step]);

  const nextStep = useCallback(() => {
    checkInputs(inputNames, () => {
      next();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }, [checkInputs, inputNames, next]);

  const handleSelectAllFavoriteThings = useCallback(
    (e: ChangeEvent) => {
      const nameOfThings = [
        'kisses',
        'walks',
        'barking',
        'snuggling',
        'treats',
        'playingFetch',
        'naps',
        'toys',
      ];

      const checkAndSetState = (name: string) => {
        const $input = document.querySelector<HTMLInputElement>(
          `input[name=${name}]`
        );

        if ($input) {
          const { checked } = e.target as HTMLInputElement;
          $input.checked = checked;
          handleChange({ target: $input });
        }
      };

      nameOfThings.forEach(checkAndSetState);
    },
    [handleChange]
  );

  const is = Object.assign(Object.create(null), {
    firstStep: step === 0,
    secondStep: step === 1,
    thirdStep: step === 2,
    fourthStep: step === 3,
    fifthStep: step === 4,
    sixthStep: step === 5,
    seventhStep: step === 6,
  });

  return (
    <form id="pawtasticForm" onSubmit={handleSubmit} className="form">
      <div className="steps-container">
        {is.firstStep && (
          <Fieldset
            id="first"
            label="First, let's make sure we serve your area."
          >
            <DefaultInput
              id="postal-code"
              name="zipCode"
              label="Zip code"
              value={values.zipCode}
              handleChange={handleChange}
              placeholder="Enter your answer"
            />
          </Fieldset>
        )}

        {is.secondStep && (
          <Fieldset label="Good news! We care for pets in your area. Let's">
            <DefaultInput
              type="email"
              id="email"
              name="email"
              label="E-mail"
              value={values.email}
              error={errors.email}
              handleChange={handleChange}
              placeholder="Enter your e-mail"
              autoFocus
            />

            <div className="step__field-block">
              <DefaultInput
                type="password"
                id="new-password"
                name="password"
                label="Password"
                value={values.password}
                error={errors.password}
                handleChange={handleChange}
                placeholder="Enter your password"
              />
              <DefaultInput
                type="password"
                id="confirm"
                name="confirm"
                label="Confirm password"
                value={values.confirm}
                error={errors.confirm}
                handleChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            <Checkbox
              id="policy"
              name="policy"
              checkValue={values.policy}
              error={errors.policy}
              handleChange={handleChange}
              label="I have read the Privacy and agree to the Terms of Service."
            />
          </Fieldset>
        )}

        {is.thirdStep && (
          <Fieldset label="Hello! Please tell us a little bit about yourself.">
            <div className="step__field-block">
              <DefaultInput
                id="given-name"
                name="firstName"
                label="First name"
                value={values.firstName}
                error={errors.firstName}
                handleChange={handleChange}
                placeholder="Your first name"
                autoFocus
              />
              <DefaultInput
                id="family-name"
                name="lastName"
                label="Last name"
                value={values.lastName}
                error={errors.lastName}
                handleChange={handleChange}
                placeholder="Your last name"
              />
            </div>

            <div className="step__field-block">
              <DefaultInput
                id="tel-national"
                name="phone"
                label="Phone"
                value={values.phone}
                error={errors.phone}
                handleChange={handleChange}
                placeholder="01 90000-0000"
              />
              <DefaultInput
                id="alt-tel"
                name="altPhone"
                label="Phone alt"
                value={values.altPhone}
                error={errors.altPhone}
                handleChange={handleChange}
                placeholder="01 90000-0000"
              />
            </div>

            <DefaultInput
              id="cpf"
              name="cpf"
              label="CPF"
              value={values.cpf}
              error={errors.cpf}
              handleChange={handleChange}
              placeholder="000.000.000-00"
            />
          </Fieldset>
        )}

        {is.fourthStep && (
          <Fieldset
          label={
              <>
                Nice to meet you, {values.firstName}. <br />
                Tell us all about your furry, feathery, or scaley friend.
              </>
            }
          >
            <Select
              id="pet-type"
              title="Kind of your pet"
              error={errors.petType}
              columns={4}
            >
              <Option
                id="dog"
                name="petType"
                label="Dog"
                handleChange={handleChange}
                autoFocus={true}
              >
                <PetType type="dog" />
              </Option>
              <Option
                id="cat"
                name="petType"
                label="Cat"
                handleChange={handleChange}
              >
                <PetType type="cat" />
              </Option>
              <Option
                id="birdy"
                name="petType"
                label="Birdy"
                handleChange={handleChange}
              >
                <PetType type="birdy" />
              </Option>
              <Option
                id="hamster"
                name="petType"
                label="Hamster"
                handleChange={handleChange}
              >
                <PetType type="hamster" />
              </Option>
            </Select>

            <span className="step__info">
              Have multiple pets? That’s awesome. You can create
              <br />
              additional pet profiles for the whole family later.
            </span>
          </Fieldset>
        )}

        {is.fifthStep && (
          <Fieldset
          label={`Yay, we love ${values.petType}! Give us the basics about your pup.`}
          >
            <div className="step__field-block">
              <DefaultInput
                id="pet-name"
                name="petName"
                label="Name"
                value={values.petName}
                error={errors.petName}
                handleChange={handleChange}
                placeholder="Pet's name"
                autoFocus
              />

              <PhotoInput
                id="photo"
                name="petPhoto"
                label={values.petPhoto.name || 'Upload a image'}
                error={errors.petPhoto}
                handleChange={handleChange}
              />
            </div>

            <div className="step__field-block">
              <DefaultInput
                type="text"
                id="pet-breed"
                name="petBreed"
                label="Breed"
                value={values.petBreed}
                error={errors.petBreed}
                handleChange={handleChange}
                placeholder="Pet's breed"
              />
              <DefaultInput
                type="date"
                id="bday"
                name="petBirthday"
                label="Birthday"
                value={values.petBirthday}
                error={errors.petBirthday}
                handleChange={handleChange}
                placeholder="Pet's birthday"
              />
            </div>

            <div className="step__field-block">
              <Select
                id="pet-gender"
                title="Gender"
                error={errors.petGender}
                columns={2}
              >
                <Option
                  id="male"
                  name="petGender"
                  label="Male"
                  handleChange={handleChange}
                />

                <Option
                  id="female"
                  name="petGender"
                  label="Female"
                  handleChange={handleChange}
                />
              </Select>
              <Select
                id="pet-spayed-or-neutered"
                title="Spayed or Neutered"
                error={errors.petSpayedOrNeutered}
                columns={2}
              >
                <Option
                  id="SONYes"
                  label="Yes"
                  name="petSpayedOrNeutered"
                  handleChange={handleChange}
                />

                <Option
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
              error={errors.petWeight}
              columns={4}
            >
              <Option
                id="5/10"
                label="5/10"
                name="petWeight"
                handleChange={handleChange}
              />

              <Option
                id="10/15"
                label="10/15"
                name="petWeight"
                handleChange={handleChange}
              />
              <Option
                id="15/20"
                label="15/20"
                name="petWeight"
                handleChange={handleChange}
              />
              <Option
                id="20/25"
                label="20/25"
                name="petWeight"
                handleChange={handleChange}
              />
            </Select>
          </Fieldset>
        )}

        {is.sixthStep && (
          <Fieldset label="Thanks! Now give us all the details about Ginger.">
            <div className="favorite-things" title="Favorite things">
              <Checkbox
                id="select-all"
                name="selectAll"
                label="Select all"
                handleChange={handleSelectAllFavoriteThings}
              />
              <Checkbox
                id="kisses"
                name="kisses"
                label="Giving kisses"
                handleChange={handleChange}
              />
              <Checkbox
                id="walk"
                name="walks"
                label="Walks"
                handleChange={handleChange}
              />
              <Checkbox
                id="barking"
                name="barking"
                label="Barking"
                handleChange={handleChange}
              />
              <Checkbox
                id="snuggling"
                name="snuggling"
                label="Snuggling"
                handleChange={handleChange}
              />
              <Checkbox
                id="treats"
                name="treats"
                label="Treats"
                handleChange={handleChange}
              />
              <Checkbox
                id="playing-fetch"
                name="playingFetch"
                label="Playing fetch"
                handleChange={handleChange}
              />
              <Checkbox
                id="naps"
                name="naps"
                label="Naps"
                handleChange={handleChange}
              />
              <Checkbox
                id="toys"
                name="toys"
                label="Toys"
                handleChange={handleChange}
              />
            </div>

            <Textarea
              id="pet-detail"
              name="petDetail"
              maxLength={200}
              placeholder="Type here"
              label="Something that we must know?"
              handleChange={handleChange}
            />
          </Fieldset>
        )}
        {is.seventhStep && (
          <Fieldset label="Okay, Ginger's all set! We can't wait to meet het."></Fieldset>
        )}
      </div>

      <footer className="form__footer">
        <div className="step__buttons">
          <Button
            onClick={back}
            id="back-btn"
            disabled={step <= 1}
            aria-label="Previous step"
          >
            Back
          </Button>
          <Button onClick={nextStep} type="submit" aria-label="Next step">
            Next
          </Button>
        </div>
        <p className="member">
          <span>Already a member?</span>
          <a href="#" title="login" aria-label="Already a member? Log in">
            Log in
          </a>
        </p>
      </footer>
    </form>
  );
};

export default Form;
