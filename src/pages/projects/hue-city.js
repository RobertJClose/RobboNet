import * as React from "react";
import Layout from "../../components/layouts/Layout";
import ChokepointVideo from "./videos/Hue City Chokepoint.mp4";
import HueCityVisualElements from "./images/Hue City Visual Elements.png";
import HueCityChokepointNetwork from "./images/Hue Chokepoint Network.png";

const HueCityPage = () => {
  return (
    <Layout pageTitle="RobboNet: Hue City Case Study">
      <h1>Hue City: A Map Design Case Study In Rising Storm 2</h1>
      <p>
        While most of my time is spent learning how to program the games I wish
        existed, I also spend a lot of time thinking about the extant games I
        love and what it is about them that I admire. Most of these thoughts
        stay in my head, or are forced upon my poor disinterested friends, but
        after the KSP Companion I wanted to do something a bit different, and so
        I started to put into words some of my thoughts about one of my
        favourite FPS maps: Rising Storm 2's <i>Hue City</i>.
      </p>
      <p>
        The resulting essay is in my thorough and analytical style, and touches
        upon not just the design of the map itself, but also related contextual
        details such as where Rising Storm 2 sits in the ever evolving FPS
        tradition, and how we might design maps for these games in the future. I
        will summarise the main arguments and copy the conclusion out verbatim.
        If you feel tempted to read the whole essay, you may find it at the
        bottom of the page.
      </p>
      <h2>Introduction</h2>
      <p>
        In Rising Storm 2, the map Hue City is an absolute blast. The fighting
        is incredibly intense for both attackers and defenders, and when the
        game was first released, players would often vote to play in Hue at
        every possible opportunity. I believe that the reason for this
        popularity lies in the interaction between the design of the map and the
        design of the game itself.
      </p>
      <h2>The Impact Of A Shooter's Time-To-Kill</h2>
      <p>
        Rising Storm 2 differs from most other first-person shooters in that it
        attempts to simulate realistic bullet damage, often resulting in players
        being killed by a single hit. This puts the game at the extreme low-end
        of the time-to-kill (<b>TTK</b>) spectrum of shooter games, which
        classifies games according to how much time it takes, on average, for a
        player to kill another player. The TTK of a shooter often leads to many
        of the characteristic features of the game. For example, the huge TTK of
        games such as Overwatch and Team Fortress 2 enable those games to offer
        their extremely diverse character sets, as engagements in low TTK
        shooters are often very sensitive to differences between the combatants'
        health, armour, or weaponry. Another distinctive example is the high TTK
        Halo, where skilled players make use of <i>teamshotting</i> and{" "}
        <i>weaponcomboing</i> to maximise their opponents TTK while minimising
        their own.
      </p>
      <p>
        What is important to Rising Storm 2 is that as TTK decreases, the
        relative strength of defenders against attackers increases. With a high
        TTK, a player under fire has time to reposition to the next piece of
        cover. Several attackers moving together may simply have too much health
        for their traversal to be blocked. With a low TTK, even a single well
        positioned defender can block the movement of many attackers at once.
        Thus, matches in Rising Storm 2 often break down into a sequences of
        chokepoint engagements, with the progress of attackers occurring as
        checkpoints towards their objective.
      </p>
      <video autoPlay controls loop muted>
        <source src={ChokepointVideo} type="video/mp4" />
      </video>
      <h2>Hue City's Chokepoint Network</h2>
      <p>
        This is why Hue City is such a successful map: it offers a sequence of
        well-designed chokepoints, that are simple for the defenders to
        establish and interesting for the attackers to assault. The simplicity
        is important because, unfortunately, there is often a lack of
        communication within teams in Rising Storm 2. Inability to establish
        chokepoints is a frequent fatal failure by defending teams in Rising
        Storm 2, so games are often too brutal for the defenders and too short
        and easy for the attackers. Once the map meets the basic combat
        expectations of the players, it then offers attackers a diverse and
        interesting set of choices to their approach. To show this more easily,
        I came up with a diagrammatic way of displaying the network of
        chokepoints. Using these visual elements:
      </p>
      <img src={HueCityVisualElements}/>
      <p>
        We can now examine the chokepoint network of a section of Hue City in
        greater detail:
      </p>
      <img src={HueCityChokepointNetwork}/>
      <p>
        This diagram represents the attackers' approach to capture zone C on Hue
        City. First of all, when we examine the capture zone itself we see that
        it's simple for defenders to establish a firm basic resistance. There
        are only 8 chokepoints into the capture zone, and with teams of 32 these
        are usually swiftly occupied. From there, we break the approach down
        into four sections. This is helpful because combat in each of the
        sections is largely independent, and because the combat in each section
        has its own character. Studying the sections in isolation reveals the
        interesting choices that attackers have during their approach to the
        capture zone.
      </p>
      <p>
        The left and right flanks are the main avenues for the assault. There's
        lots of space and potential throughput of attackers, and several ways
        into the capture zone. The left flank features a large bastion wall,
        from which defenders can fire upon attackers in nearby sections. This
        makes the left flank an important target for the attackers, as
        disrupting the bastion can help allies across the map. The right flank
        gives attackers safer routes to the centre and then even the left flank.
        Breakthroughs from these flanks are massively disruptive to the
        defenders, and will often lead to the capture zone falling.
      </p>
      <p>
        The centre and the tunnel are a bit different. The centre is the most
        direct route into the capture zone, but it's risky as the approach is
        very exposed. Instead, players will often advance up the right flank and
        move into the centre from there. This redistributes some potentially
        redundant attackers to sections of the defence that might be softer. The
        tunnel has a simple linear sequence of chokepoints. Progress in the
        tunnel is usually costly but very stable, and pressure from the tunnel
        typically builds over time to undermine the long term stability of the
        defence. However, the total throughput of soldiers is low. Breakthroughs
        from the centre or the tunnel rarely lead to a capture on their own, but
        instead they can boost the momentum of breakthroughs in the flanks.
      </p>
      <p>
        In summary, this capture zone is simple to defend and interesting to
        attack. There's a diversity in how attackers want to conduct their
        assault, and players can expect their experience to change from game to
        game. This is true for the other capture zones throughout the map. It
        makes for some memorable experiences and keeps players hungry for more.
      </p>
      <h2>What We Can Learn From Hue City</h2>
      <p>So what can we take forward from the design of Hue City?</p>
      <p>
        First of all, Hue City succeeds because the high-level strategic choices
        for players are interesting. Within a single capture zone, there can be
        a variety of experiences. Throughout a map, the capture zones themselves
        can offer a variety of experiences as well.
      </p>
      <p>
        Secondly, on a small scale Hue City delivers those experiences with
        precision. There's no careless placement of obstacles, cover, or
        chokepoints. Strategically important elements such as capture zones and
        ammo boxes are well placed as well. Even small changes to these elements
        can have big impacts, and I believe many other maps in the game feature
        capture zones whose boundaries are exploited by experienced players.
      </p>
      <p>
        Finally, the popularity of Hue City is the result of the design of
        Rising Storm 2 itself. Whereas the previous points are specifically
        about map design, this point is more about how the rest of the game's
        design can empower map designers to have greater freedom and creativity.
        Hue City's uniquely extreme expression of urban combat makes it easy for
        emergent teamplay to occur, even in the context of Rising Storm 2's
        largely uncoordinated teams. Along with a lack of communication, there
        is generally a lack of coordination within the 6 man squads that every
        player is nominally a part of. Rather than act as units under the
        direction of the team leader, players in squads often play
        independently. Several FPS games have made innovative changes however,
        and adopting them could then enable map designers to ask more complex
        strategic questions of teams. For example, <i>Overwatch</i> has its
        'kudos' system to promote sporting behaviour. It also allows players to
        queue for particular roles within the team, allowing the empowered
        matchmaking system to more reliably deliver the embryo of a cohesive
        team. <i>Squad</i> and <i>Hell Let Loose</i> feature the milestone
        innovation of having a separate chat channel for the team leader and
        their squad leaders. Finally, <i>Verdun</i> and <i>Post Scriptum</i>{" "}
        wisely predefine what type of soldiers make up each squad, solving the
        common issue in Rising Storm 2 of squads either being a mix of
        uncomplementary specialised weaponry or almost exclusively riflemen with
        little specialised support.
      </p>
      <h2>Conclusion (Verbatim)</h2>
      <p>
        Rising Storm 2's idiosyncratic damage mechanics, inherited from its
        ancestor Red Orchestra, bring unique challenges to the task of map
        design. The ability for defenders to establish strong killzones from
        well protected positions makes them far more powerful than in other
        first-person shooters, and just a few veteran players may prove to be an
        insurmountable obstacle to the inexperienced. Many of the game's maps
        struggle to reliably create a lasting combat experience that satisfies
        both teams, and it is in this environment that Hue City achieves
        unparalleled yet controversial popularity. Understanding why Hue City
        proved so popular can help designers create better maps and even better
        games for us to enjoy.
      </p>
      <p>
        What we have seen is that Hue City is a map that makes it easy for
        defenders to establish firm resistance. Once that base for the
        experience is in place, it then offers attackers interesting options for
        assaulting that defence. Progress to the attackers can occur in diverse
        ways, with some paths offering costly major breakthroughs while others
        undermine the long term stability of the defenders. The narrowness of
        the design makes the map a uniquely extreme expression of close-quarters
        combat, and, in the context of Rising Storm 2's uncoordinated teams,
        that makes it simple for teamwork to occur even from teams of silent
        individuals. The result is a map that provides an engrossing combat
        experience, full of memorable encounters in a diverse variety of forms.
      </p>
      <p>
        While Red Orchestra was once the choice of a niche corner of the gaming
        community, it has since inspired an increasing number of new releases
        with growing financial backing. As Red Orchestra's descendants continue
        to grow in popularity, the designers in this realm will benefit from
        exemplary successes like Hue City as they push this blossoming corner of
        the otherwise ripened shooter world to its full potential. While it is
        not clear how much growth is still possible, I personally hope that one
        day a critical mass of popular appeal will be reached, such that a
        studio feels ready to launch a refined esports experience for this
        subgenre. This has already happened for games across the rest of the TTK
        spectrum, with unprecedented returns. If that lucrative milestone can be
        reached, I hope that the memory of Hue City and the other popular maps
        of today will live on through the competitive arenas of the future.
      </p>
      <iframe
        width="100%"
        height="700"
        src={"/docs/hue-city-a-map-design-case-study.pdf#zoom=100"}
      ></iframe>
    </Layout>
  );
};

export default HueCityPage;
