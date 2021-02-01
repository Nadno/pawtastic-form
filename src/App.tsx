import React, { ChangeEvent, useState } from 'react';
import Button from './components/Button';
import InputText from './components/InputText';

import Logo from './components/Logo';
import LeftSide from './layouts/LeftSide';

import Form from './layouts/Form';
import Fieldset from './layouts/Fieldset';
import Checkbox from './components/Checkbox';

function App() {
  const [formData, setFormData] = useState({});

  const handleInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

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
            handleInput={handleInput}
            placeholder="Enter your answer"
          />
        </Fieldset>

        <Fieldset
          id="second"
          title="Good news! We care for pets in your area. Let's"
          hidden
        >
          <InputText
            type="email"
            id="email"
            name="email"
            label="E-mail"
            handleInput={handleInput}
            placeholder="Enter your e-mail"
          />

          <div className="step__field-block">
            <InputText
              type="password"
              id="password"
              name="password"
              label="Password"
              handleInput={handleInput}
              placeholder="••••••••"
            />
            <InputText
              type="password"
              id="confirm"
              name="confirm"
              label="Confirm password"
              handleInput={handleInput}
              placeholder="••••••••"
            />
          </div>

          <Checkbox
            id="policy"
            name="policy"
            label="I have read the Privacy and agree to the Terms of Service."
          />
        </Fieldset>

        <Fieldset
          id="third"
          title="Hello! Please tell us a little bit about yourself."
        >
          <div className="step__field-block">
            <InputText
              id="first-name"
              name="firstName"
              label="First name"
              handleInput={handleInput}
              placeholder="Your first name"
            />
            <InputText
              id="last-name"
              name="lastName"
              label="Last name"
              handleInput={handleInput}
              placeholder="Your last name"
            />
          </div>

          <div className="step__field-block">
            <InputText
              id="phone"
              name="phone"
              label="Phone"
              handleInput={handleInput}
              placeholder="01 90000-0000"
            />
            <InputText
              id="alt-phone"
              name="altPhone"
              label="Phone alt"
              handleInput={handleInput}
              placeholder="01 90000-0000"
            />
          </div>
          
          <InputText
            id="cpf"
            name="cpf"
            label="CPF"
            handleInput={handleInput}
            placeholder="000.000.000-00"
          />
        </Fieldset>

        <fieldset id="fourth" hidden>
          <legend>
            <h2 className="step__tittle">
              Nice to meet you, Name. <br />
              Tell us all about your furry, feathery, or scaley friend.
            </h2>
          </legend>

          <div className="select__field">
            <h2 className="input__title">Kind of your pet</h2>

            <div className="select four-columns" id="pet-type">
              <input type="radio" name="pet-type" id="dog" value="dog" />
              <label htmlFor="dog" className="option__legend">
                <picture className="option__image">
                  <source
                    srcSet="../images/dog-option@2x.png"
                    media="(min-width: 750px)"
                  />
                  <img
                    className="option__image"
                    src="../images/dog-option.png"
                    alt="Dog"
                  />
                </picture>
                <span>Dog</span>
              </label>

              <input type="radio" name="pet-type" id="cat" value="cat" />
              <label htmlFor="cat" className="option__legend">
                <picture className="option__image">
                  <source
                    srcSet="../images/cat-option@2x.png"
                    media="(min-width: 750px)"
                  />
                  <img
                    className="option__image"
                    src="../images/cat-option.png"
                    alt="Cat"
                  />
                </picture>
                <span>Cat</span>
              </label>

              <input type="radio" name="pet-type" id="birdy" value="birdy" />
              <label htmlFor="birdy" className="option__legend">
                <picture className="option__image">
                  <source
                    srcSet="../images/birdy-option@2x.png"
                    media="(min-width: 750px)"
                  />
                  <img
                    className="option__image"
                    src="../images/birdy-option.png"
                    alt="Birdy"
                  />
                </picture>
                <span> Birdy </span>
              </label>

              <input
                type="radio"
                name="pet-type"
                id="hamster"
                value="hamster"
              />
              <label htmlFor="hamster" className="option__legend">
                <picture className="option__image">
                  <source
                    srcSet="../images/hamster-option@2x.png"
                    media="(min-width: 750px)"
                  />
                  <img
                    className="option__image"
                    src="../images/hamster-option.png"
                    alt="Hamster"
                  />
                </picture>
                <span> Hamster </span>
              </label>
            </div>
            <span className="input__error"></span>
          </div>

          <span className="step__info">
            Have multiple pets? That’s awesome. You can create
            <br />
            additional pet profiles for the whole family later.
          </span>
        </fieldset>

        <fieldset id="fifth" hidden>
          <legend>
            <h2 className="step__tittle">
              Yay, we love dogs! Give us the basics about your pup.
            </h2>
          </legend>

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
        </fieldset>

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
            />
            <Checkbox
              id="kisses"
              name="favorite-things"
              label="Giving kisses"
            />
            <Checkbox id="walk" name="favorite-things" label="Walks" />
            <Checkbox id="barking" name="favorite-things" label="Barking" />
            <Checkbox id="snuggling" name="favorite-things" label="Snuggling" />
            <Checkbox id="treats" name="favorite-things" label="Treats" />
            <Checkbox
              id="playing-fetch"
              name="favorite-things"
              label="Playing fetch"
            />
            <Checkbox id="naps" name="favorite-things" label="Naps" />
            <Checkbox id="toys" name="favorite-things" label="Toys" />
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
