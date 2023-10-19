import * as React from "react";
import HomePageVideo from "../videos/HomePageCompilation.mp4";
import Layout from "../components/layouts/Layout";
import { UnityProject } from "../components/UnityProject";
import { Link } from 'gatsby';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="RobboNet">
      <UnityProject
        projectName="ToyBuildTwo"
        style={{ width: 350, height: 350, pointerEvents: "none" }}
      />
      <p>
        Hi! My name is Robert, but I also go by Robbie and Robbo!
        <br />
        <br />
        Welcome to my digital space! I am passionate about gaming and the world
        of game development, and it is my mission to bring my technical skills
        and creative thinking to the vibrant gaming industry.
      </p>
      <p>
        I've been on quite a journey to get to this point! At university I
        studied theoretical physics, and although I comfortably achieved my
        Masters, I failed to confront and overcome the shadows of depression and
        anxiety that haunted my teenage years. It would take a global pandemic
        for me to recognise the transformation that was possible, and thus began
        my mission to make interesting games with interesting people.
      </p>
      <h2>Timeline</h2>
      <div class="timeline">
        <div class="item left">
          <div class="content">
            <h3>Restaurant Waiter at Norton Grange Coastal Resort</h3>
            <h4>June 2023 - Present</h4>
            <p>
              After returning from Brighton as a transformed man, I found a job
              in the hospitality industry as a hotel waiter. This role allows me
              to exercise my geniality and immaculate politeness in a dynamic
              and highly social environment. It also gives me a chance to
              practise my teamwork skills and adaptability in a professional
              environment, away from the battlegrounds of my favourite team
              games.
            </p>
          </div>
        </div>
        <div class="item right">
          <div class="content">
            <h3>
              <Link to="/projects/untitled-tower-defence">Quick Turret</Link>
            </h3>
            <h4>Q4 2022 - Q2 2023</h4>
            <p>
              My latest and proudest achievement - a dynamic tower defense game.
              This project showcases my blossoming skills in modular software
              design. Furthermore, during this project I made a surprising
              discovery: I might have a passion for making Editor tools?
            </p>
          </div>
        </div>
        <div class="item right">
          <div class="content">
            <h3>Healing and Transformation: Confronting The Past</h3>
            <h4>November 2021 - March 2023</h4>
            <p>
              Upon arriving in Brighton, I embarked on a new journey of healing
              and transformation. Whilst continuing to work on my projects and
              skills, I confronted my long-standing challenges with depression
              and anxiety with the help of a therapist.
              <br />
              <br />
              By the end of our tenancy, I really did feel transformed by my
              time in the city. I once felt that the tendrils of depression were
              all-pervasive, and that they had wrapped around the threads of my
              life in an unbreakable knot. While I always felt a strong sense of
              determination, now I surprise myself with optimism and rapid
              bounce-backs, and I've never felt more excited to see where the
              journey of my life goes next.
            </p>
          </div>
        </div>
        <div class="item left">
          <div class="content">
            <h3>
              <Link to="/projects/hue-city">
                Hue City: A Map Design Case Study
              </Link>
            </h3>
            <h4>Q2 2022 - Q3 2022</h4>
            <p>
              After the KSP Companion, I felt a need to take time away from
              large-scale Unity project work, and instead wanted to practise
              game critique.
              <br />
              <br />
              This is an in-depth exploration of map popularity dynamics in a
              gaming community, uncovering the secrets behind one map's
              exceptional appeal.
            </p>
          </div>
        </div>
        <div class="item right">
          <div class="content">
            <h3>
              <Link to="/projects/ksp-companion-prototype">KSP Companion</Link>
            </h3>
            <h4>Q1 2021 - Q1 2022</h4>
            <p>
              My first major project - an intricate tool for Kerbal Space
              Program players. I gradually put this together as I taught myself
              Unity and C#, and it introduced me to Git, unit testing, and how
              complexity can dramatically scale in software systems.
            </p>
          </div>
        </div>
        <div class="item left">
          <div class="content">
            <h3>Awakening to the Dream: The Covid Catalyst</h3>
            <h4>July 2019 - The Pandemic - November 2021</h4>
            <p>
              After struggling with post-graduation job hunting, the Covid
              pandemic then brought both adversity and space to reflect. My
              pursuit of a physics PhD gave way as conversations with old
              friends sparked self-acceptance of my interest in video games, and
              my desire to create them. Furthermore, it was in these
              conversations that I first acknowledged and disclosed my struggles
              with depression, and I first began to believe that those
              difficulties could be overcome.
              <br />
              <br />
              An opportunity for a fresh start in Brighton arose and I took it,
              bringing this difficult but pivotal chapter of my life to a close.
            </p>
          </div>
        </div>
      </div>
      <div class="extraProjects">
        <div class="item">
          <h3>Other Projects</h3>
          <p>
            I also have projects that are either still in progress or on an "indefinite hiatus".
          </p>
          <p>
            These include a chess variant, a "KSP-like" game, a proper Unity package that bundles my reusable code, a Total War inspired battle engine, and an arcade racing game.
          </p>
        </div>
      </div>
      <h2>Robbo the Creative Gamer</h2>
      <p>
        As a gamer, I like immersive worlds that offer mechanical depth. While
        there is an art in designing different games, upon release each and
        every game also becomes a kind of micro-artform - each game is like a
        canvas that presents players the opportunity to explore and express
        themselves. I like games whose mechanics offer a broad canvas for
        successful play, and when I play these games I find I have a particular
        style. I am a very patient player, and relish every moment of a drawn
        out and inevitable victory. I also like to frustrate and surprise my
        opponents with unconventional and original techniques - I'll only learn
        the meta so I know how to leave it behind.
      </p>
      <p>
        While the patient core of my style is more aligned with Iron Tigran, it
        is this quote from the 8th World Chess Champion, Mikhail Tal, that best
        describes how I approach a skilled opponent:
      </p>
      <blockquote>
        You must take your opponent into a deep dark forest where 2 + 2 = 5, and
        the path leading out is only wide enough for one.
      </blockquote>
      <p>Terrifying!</p>
      <p>
        So what do I play? My favourite game of all time is the first Dark
        Souls, which I love for its originality and immersive world. That said,
        it is Dark Souls III that I believe offers the best canvas for play.
        Typically I'm more of a strategy gamer than an action gamer however. I
        love Total War, Chess, Civilization, Crusader Kings, Dwarf Fortress,
        Tropico, Motorsport Manager, and more. I also adore the creative world
        of indie games. Some major inspirations for me include FTL, Risk Of
        Rain, Enter The Gungeon, Hades, Bomber Crew, Battle Brothers, and the
        truly museum-worthy Celeste. Finally, I love a blast from the past! I
        still dust and maintain my old PS2 for playing Burnout 3 and a few other
        old favourites, and I use Flashpoint to revisit my favourite flash
        games, mainly the brutal Mud and Blood 2!
      </p>
      <video autoPlay controls loop muted width={700}>
        <source src={HomePageVideo} type="video/mp4" />
      </video>
      <p>
        One final aspect of my gaming personality! You will never,{" "}
        <strong>
          <em>ever</em>
        </strong>
        , catch me putting down a teammate who has made a mistake, or
        disrespecting an opponent who has frustrated my style. Many of the games
        I play have quite toxic communities, but I don't identify with that. I
        love competing for the sake of the game, and I always try to be
        magnanimous in both victory and defeat. That said, I am a ruthless and
        brutal competitor! In my opinion, a merciless pursuit of victory is done
        out of respect to the potential skills of the opponent, not as an act of
        disrespect.
      </p>
      <p>
        To those that lose their heads and take it out on teammates and
        opponents: If you're really so desperate to win, and if you truly love
        and respect the game you're playing, you'll accept whatever has happened
        and keep trying your best - in my experience, this attitude guides you
        back onto the path of victory anyway!
      </p>
      <h2>Beyond Gaming</h2>
      <p>
        Did you know there is more to the world than video games? No, really.
      </p>
      <p>
        I am also a pretty sick bass player, and love the music of Daft Punk,
        The Strokes, Tame Impala, King Gizzard, and countless others. I read an
        awful lot, mostly non-fiction. I like football (Wolves), F1 (McClaren),
        the NFL (Seahawks), I've run the London marathon (once), and I surf
        (badly).
      </p>
    </Layout>
  );
};

export default IndexPage;
