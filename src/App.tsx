import React from 'react';
import Button from './components/Button';
import InputText from './components/InputText';

import Logo from './components/Logo';
import LeftSide from './layouts/LeftSide';

import Form from './layouts/Form';
import Fieldset from './layouts/Fieldset';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import PetType from './components/PetType';

import validate from './utils/validate';
import useForm from './utils/useForm';

import { MyFormData } from './interfaces/form';

function App() {
  const { values, errors, handleChange } = useForm<MyFormData>({
    initialValues: {
      email: '',
      password: '',
      confirm: '',
      policy: false,
    },
    validate,
  });

  return (
    <div className="App">
      <LeftSide stepImage={0}>
        <Logo />

        <div className="side__content">
          <div className="why__us">
            <h2 className="why__tittle">Why our service?</h2>
            <ol className="why__answer">
              <li>
                <p>We're animal lovers backed by</p>
              </li>
              <li>
                <p>Powered by tech, so you can</p>
              </li>
              <li>
                <p>Updates and pics for every</p>
              </li>
            </ol>
          </div>

          <div className="show__steps">
            <div className="radio__field">
              <input
                type="radio"
                className="radio__to"
                id="to-2"
                name="step"
                checked
              />
              <label> Human profile </label>
              <span className="check"></span>
            </div>

            <div className="radio__field">
              <input type="radio" className="radio__to" id="to-3" name="step" />
              <label> Pet basics </label>
              <span className="check"></span>
            </div>

            <div className="radio__field">
              <input type="radio" className="radio__to" id="to-4" name="step" />
              <label> Pet details </label>
              <span className="check"></span>
            </div>
            <div className="radio__field">
              <input type="radio" className="radio__to" id="to-5" name="step" />
              <label> Confirm </label>
              <span className="check"></span>
            </div>
          </div>
        </div>
      </LeftSide>

      <Form>
        <Fieldset
          id="first"
          title="First, let's make sure we serve your area."
          hidden
        >
          <InputText
            id="zip-code"
            name="zip-code"
            label="Zip code"
            handleChange={handleChange}
            placeholder="Enter your answer"
          />
        </Fieldset>

        <Fieldset
          id="second"
          title="Good news! We care for pets in your area. Let's"
        >
          <InputText
            type="email"
            id="email"
            name="email"
            label="E-mail"
            value={values.email}
            handleChange={handleChange}
            placeholder="Enter your e-mail"
          />

          <div className="step__field-block">
            <InputText
              type="password"
              id="password"
              name="password"
              label="Password"
              value={values.password}
              handleChange={handleChange}
              placeholder="••••••••"
            />
            <InputText
              type="password"
              id="confirm"
              name="confirm"
              label="Confirm password"
              value={values.confirm}
              handleChange={handleChange}
              placeholder="••••••••"
            />
          </div>

          <Checkbox
            id="policy"
            name="policy"
            value={values.policy}
            handleChange={handleChange}
            label="I have read the Privacy and agree to the Terms of Service."
          />
        </Fieldset>

        <Fieldset
          id="third"
          title="Hello! Please tell us a little bit about yourself."
          hidden
        >
          <div className="step__field-block">
            <InputText
              id="first-name"
              name="firstName"
              label="First name"
              handleChange={handleChange}
              placeholder="Your first name"
            />
            <InputText
              id="last-name"
              name="lastName"
              label="Last name"
              handleChange={handleChange}
              placeholder="Your last name"
            />
          </div>

          <div className="step__field-block">
            <InputText
              id="phone"
              name="phone"
              label="Phone"
              handleChange={handleChange}
              placeholder="01 90000-0000"
            />
            <InputText
              id="alt-phone"
              name="altPhone"
              label="Phone alt"
              handleChange={handleChange}
              placeholder="01 90000-0000"
            />
          </div>

          <InputText
            id="cpf"
            name="cpf"
            label="CPF"
            handleChange={handleChange}
            placeholder="000.000.000-00"
          />
        </Fieldset>

        <Fieldset
          id="fourth"
          title={
            <>
              Nice to meet you, Name. <br />
              Tell us all about your furry, feathery, or scaley friend.
            </>
          }
          hidden
        >
          <div className="select-field">
            <h2 className="input__title">Kind of your pet</h2>

            <Select columns={4} id="pet-type">
              <Select.Option id="dog" name="petType" label="Dog">
                <PetType type="dog" />
              </Select.Option>
              <Select.Option id="cat" name="petType" label="Cat">
                <PetType type="cat" />
              </Select.Option>
              <Select.Option id="birdy" name="petType" label="Birdy">
                <PetType type="birdy" />
              </Select.Option>
              <Select.Option id="hamster" name="petType" label="Hamster">
                <PetType type="hamster" />
              </Select.Option>
            </Select>
            <span className="input__error"></span>
          </div>

          <span className="step__info">
            Have multiple pets? That’s awesome. You can create
            <br />
            additional pet profiles for the whole family later.
          </span>
        </Fieldset>

        <Fieldset
          id="fifth"
          title="Yay, we love dogs! Give us the basics about your pup."
          hidden
        >
          <div className="field__block">
            <div className="input__field">
              <label htmlFor="pet-name" className="input__title">
                Name
              </label>

              <input
                type="text"
                name="pet-name"
                id="pet-name"
                placeholder="Pet's name"
              />
              <span className="input__error"></span>
            </div>

            <div className="photo__field">
              <input
                type="file"
                name="pet-photo"
                id="pet-photo"
                accept="image/png, image/jpeg, image/jpg"
              />

              <label htmlFor="pet-photo">
                <picture className="upload__button">
                  <source
                    srcSet="../images/path@2x.png"
                    media="(min-width: 750px)"
                  />
                  <img
                    id="select-image"
                    src="../images/path.png"
                    alt="Select a pet"
                  />
                </picture>

                <span className="input__title"> Upload a photo </span>
              </label>
              <span className="input__error"></span>
            </div>
          </div>

          <div className="field__block">
            <div className="input__field">
              <label htmlFor="pet-breed" className="input__title">
                Breed
              </label>

              <input
                type="text"
                name="pet-breed"
                id="pet-breed"
                placeholder="Pet's breed"
              />
              <span className="input__error"></span>
            </div>
            <div className="input__field">
              <label htmlFor="pet-birth-day" className="input__title">
                Birthday
              </label>

              <input type="date" name="pet-birth-day" id="pet-birth-day" />
              <span className="input__error"></span>
            </div>
          </div>

          <div className="select__container">
            <div className="select__field">
              <span className="input__title">Gender</span>

              <div className="select two-columns" id="pet-gender">
                <input
                  type="radio"
                  name="pet-gender"
                  id="pet-male"
                  value="male"
                />
                <label htmlFor="pet-male" className="option__legend">
                  {' '}
                  Male{' '}
                </label>

                <input
                  type="radio"
                  name="pet-gender"
                  id="pet-female"
                  value="female"
                />
                <label htmlFor="pet-female" className="option__legend">
                  {' '}
                  Female{' '}
                </label>
              </div>
              <span className="input__error"></span>
            </div>

            <div className="select__field">
              <span className="input__title">Spayed or Neutered</span>

              <div className="select two-columns" id="pet-spayed-or-neutered">
                <input
                  type="radio"
                  name="pet-spayed-or-neutered"
                  id="spayed-or-neutered-yes"
                  value="true"
                />
                <label
                  htmlFor="spayed-or-neutered-yes"
                  className="option__legend"
                >
                  Yes
                </label>

                <input
                  type="radio"
                  name="pet-spayed-or-neutered"
                  id="spayed-or-neutered-no"
                  value="false"
                />
                <label
                  htmlFor="spayed-or-neutered-no"
                  className="option__legend"
                >
                  No
                </label>
              </div>
              <span className="input__error"></span>
            </div>
          </div>

          <div className="select__field">
            <span className="input__title">Weight</span>

            <div className="select four-columns" id="pet-weight">
              <input
                type="radio"
                name="pet-weight"
                id="first-weight"
                value="5/10"
              />
              <label htmlFor="first-weight" className="option__legend">
                5/10 Kg
              </label>

              <input
                type="radio"
                name="pet-weight"
                id="second-weight"
                value="10/15"
              />
              <label htmlFor="second-weight" className="option__legend">
                10/15 Kg
              </label>

              <input
                type="radio"
                name="pet-weight"
                id="third-weight"
                value="15/20"
              />
              <label htmlFor="third-weight" className="option__legend">
                15/20 Kg
              </label>

              <input
                type="radio"
                name="pet-weight"
                id="fourth-weight"
                value="20/25"
              />
              <label htmlFor="fourth-weight" className="option__legend">
                20/25 Kg
              </label>
            </div>
            <span className="input__error"></span>
          </div>
        </Fieldset>

        <Fieldset
          id="sixth"
          title="Thanks! Now give us all the details about Ginger."
          hidden
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
          id="seventh"
          title="Okay, Ginger's all set! We can't wait to meet het."
          hidden
        ></Fieldset>

        <footer className="form__footer">
          <div className="step__buttons">
            <Button id="back-btn" disabled>
              Back
            </Button>
            <Button id="next-btn" type="submit">
              Next
            </Button>
          </div>
          <p className="member">
            Already a member? <a href="/">Log in</a>
          </p>
        </footer>
      </Form>
    </div>
  );
}

export default App;
