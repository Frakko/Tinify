<!-- PROJECT SHIELDS -->
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="url_shortener/static/assets/logo.png" alt="Tinify logo" width="15%">
  <h3 align="center">Tinify</h3>
  <p align="center">
    A simple but awesome URL shortener app!
    <br />
    <a href="https://github.com/Frakko/URL-Shortener/issues">Report Bug</a>
    ·
    <a href="https://github.com/Frakko/URL-Shortener/issues">Request Feature</a>
  </p>
</p>

<br>
<br>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

There are already many great URL shortener apps available for free on the internet, however, I wanted to build my own custom one! Even though this is a fairly simple project, It's a great opportunity to learn either new technologies or improve in the ones that you already know.

ULR shorteners work through a technique that goes by the name of redirecting or forwarding. It allows for multiple ULRs to link to the same web page which, under certain circumstances is really useful. Once a web browser attempts to open a ULR which has been redirected, a page with a different ULR is opened.

If you'd like to try out the project for yourself, feel free to read the <a href="#getting-started">getting started</a> section.

### Built With

This project was built using the following technologies:

- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
- [Flask SQLAlchemy](https://flask.palletsprojects.com/en/1.1.x/patterns/sqlalchemy/)
- [SQLite](https://www.sqlite.org/index.html)
- [Python-dotenv](https://pypi.org/project/python-dotenv/)

<br>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of the project up and running follow these simple steps listed below.

### Prerequisites

- **Python**

  Python can be downloaded from [here](https://www.python.org/downloads/) - version 3.8 or higher is recommended. To check if you have Python installed run the following command:

  ```sh
  python --version
  ```

  or

  ```sh
  python3 --version
  ```

- **Pip**

  Pip (Python's package manager) is also required for this project. It usually comes with Python. To check if you have Pip run:

  ```sh
  pip --version
  ```

  or

  ```sh
  pip3 --version
  ```

- **Pipenv**

  This project uses Pipenv's virtual enviroments. To install Pipenv run the following command:

  ```sh
  pip install pipenv
  ```

<br>

### Installation

1. Clone the repository

   - Through SSH:

   ```sh
   git clone git@github.com:Frakko/URL-Shortener.git
   ```

   - Through HTTPS:

   ```sh
   git clone https://github.com/Frakko/URL-Shortener.git
   ```

1. CD in to the project folder:
   ```sh
   cd url_shortener
   ```
1. Start Pipenv's virtual enviroment:
   ```sh
   pipenv shell
   ```
1. Install the required Python packages:
   ```sh
   pipenv install
   ```
   or
   ```sh
   pipenv sync
   ```
1. Create the Sqlite database:

   - In the `settings.py` file change the constant `SQLALCHEMY_DATABASE_URI` to a hard coded database link that looks like this: `sqlite:///db.sqlite3` (SQLite does not impose any naming requirements, thus you can name the database as you wish).
     This will later on be loaded from an enviroment variable, however those variables get loaded only once `flask run` is called, therefore we would have some issues when creating the database.

   - Open then the Python shell in your terminal by running the `python` command.

   - In the shell, write the following lines:

   ```py
   from url_shortener import create_app
   from url_shortener.extensions import db
   db.create_all(app=create_app())
   ```

1. Now that the database is created, create a `.env` file and add to it the following line, so that it will be loaded by this enviroment variable:
   ```sh
   DATABASE_URL=sqlite:///your_database_name_here
   ```
1. The project is set up! To run it, type:
   ```sh
   flask run
   ```

<!-- USAGE EXAMPLES -->
<!--
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_
-->

<!-- ROADMAP -->
<!--
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).
-->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request - make sure to include a descriptions of the changes you made!

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

If you'd like to contact me, feel free to message me on either one of the follwing networks:

- Twitter - [@Frakko](https://twitter.com/frakkoh)<br>
- Discord - Frakko#0001

<!-- ACKNOWLEDGEMENTS -->
<!--
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)
-->
