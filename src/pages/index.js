import * as React from "react";
import HomePageVideo from "../videos/HomePageCompilation.mp4";
import Layout from "../components/layouts/Layout";
import { UnityProject } from "../components/UnityProject";
import { Link } from 'gatsby';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="RobboNet">
      <UnityProject
        projectName="ToyBuild"
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
      <p>
        Strengths? While it would be easy to point to my technical ability,
        patience is my secret weapon! It's the calm center that allows me to
        approach even the most daunting technical challenges with unwavering
        confidence. I firmly believe that if success is possible, it's not a
        matter of "if" but "when".
      </p>
      <p>
        I also think people underestimate my potential for creativity! I think
        of creativity like exploring an unknown space, and being technically
        able is like your ability to cut through tough terrain without getting
        lost. On its own, technical ability won't necessarily take you anywhere,
        but it gives you freedom, and enables the bold to explore. I think I
        express this best through my gaming style. I'm not afraid to explore
        techniques that are{" "}
        <a
          href="https://www.urbandictionary.com/define.php?term=off-meta"
          target="_blank"
        >
          'off-meta'
        </a>
        , and love ambushing veteran players with something new!
      </p>
      <h2>Timeline</h2>
      <div class="timeline">
        <div class="item left">
          <div class="content">
            <h3>Restaurant Waiter at Norton Grange Coastal Resort</h3>
            <h4>June 2023 - Present</h4>
            <p>
              After returning from Brighton as a transformed man, I found a job
              in the hospitality industry as a hotel waiter. This role provides
              me an opportunity to hone my interpersonal skills in a dynamic and
              high-intensity environment. This ongoing experience reinforces my
              commitment to continuous improvement and prepares me for the
              challenges and rewards of a future professional career.
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
              My latest and proudest achievement - a dynamic tower defense game
              showcasing my blossoming skills in coding, 3D modeling, and
              modular design.
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
      <p>Terrifying! And my goal is to make that path as long and slow as possible!</p>
      <p>
        So what do I play? My favourite game of all time is the first Dark
        Souls, which I love for its originality and immersive world. That said,
        it is Dark Souls III that I believe offers the best canvas for play. I'm
        more of a strategy gamer than an action gamer however. I love Total War,
        and have enjoyed Chess, Civilization, Crusader Kings, and more. I also
        adore the creative world of indie games. Some major inspirations for me
        include FTL, Risk Of Rain, Enter The Gungeon, Bomber Crew, Battle
        Brothers, and the truly museum-worthy Celeste. Finally, I love a blast
        from the past! I still dust and maintain my old PS2 for playing Burnout
        3 and a few other old favourites, and I use Flashpoint to revisit my
        favourite flash games as well!
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
    </Layout>
  );
};

export default IndexPage;
