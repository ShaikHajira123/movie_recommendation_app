const recommendations = {
    "Comedy": {
        Short: {
            Happy: "The Grand Budapest Hotel — a quirky comedy film with a runtime of 99 minutes, perfect for a happy mood. Enjoy this lighthearted, visually stunning adventure!",
            Relaxed: "Isle of Dogs — a creative and calm stop-motion adventure with stunning visuals and a heartwarming story, clocking in at 101 minutes.",
            Excited: "Scott Pilgrim vs. The World — a high-energy, comedic action film with unique visual effects and a runtime of 112 minutes, perfect for an exciting mood.",
            Adventurous: "Jumanji: Welcome to the Jungle — a hilarious, adventurous journey that combines action and comedy with a runtime of 119 minutes."
        },
        Medium: {
            Happy: "Superbad — a classic comedy for a cheerful mood with hilarious teenage antics, running for 113 minutes.",
            Relaxed: "The Intern — a light-hearted, feel-good film about work-life balance and friendships, with a runtime of 121 minutes.",
            Excited: "Hot Fuzz — an action-packed comedy with sharp wit and clever storytelling, running for 121 minutes.",
            Adventurous: "The Secret Life of Walter Mitty — an inspiring and adventurous story of self-discovery, clocking in at 114 minutes."
        },
        Long: {
            Happy: "Forrest Gump — a heartfelt comedy-drama with an inspiring story and memorable moments, running for 142 minutes.",
            Relaxed: "The Green Mile — a soothing yet emotional tale of hope and humanity, with a runtime of 189 minutes.",
            Excited: "The Wolf of Wall Street — an exciting and outrageous story of excess and ambition, running for 180 minutes.",
            Adventurous: "Pirates of the Caribbean series — a thrilling adventure on the seas filled with action, humor, and a runtime of over 140 minutes per movie."
        }
    },
    "Action": {
        Short: {
            Happy: "Kung Fu Hustle — a hilarious action-comedy packed with martial arts fun, running for 99 minutes.",
            Relaxed: "John Wick — a stylish, action-packed tale with sleek visuals and a runtime of 101 minutes.",
            Excited: "Mad Max: Fury Road — an adrenaline-pumping action experience with stunning visuals, clocking in at 120 minutes.",
            Adventurous: "Indiana Jones: Raiders of the Lost Ark — an iconic treasure-hunting adventure with a runtime of 115 minutes."
        },
        Medium: {
            Happy: "Guardians of the Galaxy — a light-hearted, action-packed space adventure, running for 121 minutes.",
            Relaxed: "Mission: Impossible — Ghost Protocol — a thrilling yet smooth ride with a runtime of 133 minutes.",
            Excited: "The Dark Knight — a masterpiece of action and storytelling with a runtime of 152 minutes.",
            Adventurous: "Jurassic Park — a thrilling adventure into the world of dinosaurs, clocking in at 127 minutes."
        },
        Long: {
            Happy: "Avengers: Endgame — an epic action film with a heartfelt conclusion, running for 181 minutes.",
            Relaxed: "The Matrix — a thought-provoking yet action-filled journey, clocking in at 136 minutes.",
            Excited: "Inception — a thrilling, mind-bending action movie with a runtime of 148 minutes.",
            Adventurous: "The Lord of the Rings: The Fellowship of the Ring — a sweeping adventure with a runtime of 178 minutes."
        }
    },
    "Drama": {
        Short: {
            Happy: "Little Miss Sunshine — a charming and uplifting family drama with a runtime of 101 minutes.",
            Relaxed: "The Straight Story — a calming, heartfelt journey with a runtime of 112 minutes.",
            Excited: "Whiplash — an intense drama about ambition and music, clocking in at 106 minutes.",
            Adventurous: "The Motorcycle Diaries — an inspiring true story of adventure with a runtime of 126 minutes."
        },
        Medium: {
            Happy: "The Pursuit of Happyness — an uplifting, heartwarming tale with a runtime of 117 minutes.",
            Relaxed: "A Beautiful Mind — a soothing yet inspiring story, clocking in at 135 minutes.",
            Excited: "Fight Club — a gripping, thought-provoking drama with a runtime of 139 minutes.",
            Adventurous: "The Revenant — a harrowing tale of survival and adventure, running for 156 minutes."
        },
        Long: {
            Happy: "The Shawshank Redemption — a story of hope and resilience with a runtime of 142 minutes.",
            Relaxed: "The Godfather — a classic family saga with powerful storytelling and a runtime of 175 minutes.",
            Excited: "Gladiator — an epic historical drama full of action, running for 155 minutes.",
            Adventurous: "Dances with Wolves — an inspiring story of exploration and connection with a runtime of 181 minutes."
        }
    },
    "Horror": {
        Short: {
            Happy: "Zombieland — a fun and quirky take on the zombie genre with a runtime of 88 minutes.",
            Relaxed: "A Quiet Place — a suspenseful yet atmospheric thriller, clocking in at 90 minutes.",
            Excited: "The Babadook — a gripping psychological horror with a runtime of 94 minutes.",
            Adventurous: "The Descent — a terrifying journey into the unknown, running for 99 minutes."
        },
        Medium: {
            Happy: "Shaun of the Dead — a hilarious zombie comedy with a runtime of 100 minutes.",
            Relaxed: "It Follows — a chilling, slow-burn horror film, running for 100 minutes.",
            Excited: "Hereditary — a deeply unsettling and intense experience, clocking in at 127 minutes.",
            Adventurous: "28 Days Later — a gripping post-apocalyptic thriller with a runtime of 113 minutes."
        },
        Long: {
            Happy: "The Cabin in the Woods — a smart, satirical horror film, running for 95 minutes.",
            Relaxed: "The Shining — a classic atmospheric horror masterpiece with a runtime of 146 minutes.",
            Excited: "Midsommar — a visually stunning and disturbing folk horror with a runtime of 148 minutes.",
            Adventurous: "The Witch — an eerie journey into the dark past, clocking in at 93 minutes."
        }
    },
    "Sci-Fi": {
        Short: {
            Happy: "WALL-E — a heartwarming sci-fi tale about love and hope, running for 98 minutes.",
            Relaxed: "Moon — a thought-provoking and serene space drama with a runtime of 97 minutes.",
            Excited: "District 9 — an intense and allegorical sci-fi story, clocking in at 112 minutes.",
            Adventurous: "Star Wars: A New Hope — a classic space adventure with a runtime of 121 minutes."
        },
        Medium: {
            Happy: "Back to the Future — a light-hearted time-traveling adventure, running for 116 minutes.",
            Relaxed: "Arrival — a meditative, emotionally rich sci-fi drama with a runtime of 116 minutes.",
            Excited: "Blade Runner 2049 — a visually stunning, action-packed sequel, clocking in at 163 minutes.",
            Adventurous: "Interstellar — an epic journey through space and time with a runtime of 169 minutes."
        },
        Long: {
            Happy: "Guardians of the Galaxy Vol. 2 — a vibrant and humorous space epic with a runtime of 136 minutes.",
            Relaxed: "2001: A Space Odyssey — a classic, visually stunning sci-fi masterpiece, clocking in at 149 minutes.",
            Excited: "The Matrix Reloaded — an action-packed continuation of the sci-fi saga, running for 138 minutes.",
            Adventurous: "Avatar — a breathtaking journey to the world of Pandora with a runtime of 162 minutes."
        }
    }
};


function generateRecommendation() {
    const genre = document.getElementById('genre').value;
    const duration = document.getElementById('duration').value;
    const mood = document.getElementById('mood').value;

    const recommendationDiv = document.getElementById('result');

    if (genre && duration && mood) {
        const recommendation = recommendations[genre]?.[duration]?.[mood];
        if (recommendation) {
            recommendationDiv.innerHTML = `<p><strong>Recommendation:</strong> Based on your preferences, we recommend watching: ${recommendation}</p>`;
            recommendationDiv.classList.add('result');
        } else {
            recommendationDiv.innerHTML = "<p>No recommendation available for your selection.</p>";
            recommendationDiv.classList.remove('result');
        }
    } else {
        recommendationDiv.innerHTML = "";
        recommendationDiv.classList.remove('result');
    }
}

// Add event listeners to dropdowns
document.getElementById('genre').addEventListener('change', generateRecommendation);
document.getElementById('duration').addEventListener('change', generateRecommendation);
document.getElementById('mood').addEventListener('change', generateRecommendation);
