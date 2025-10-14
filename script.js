
document.addEventListener('DOMContentLoaded', function() {
    
    // =================================================================
    //  DADOS DOS ÁLBUNS 
    // =================================================================
    const albumsData = [
        // Álbuns (de 98 a 85)
        { id: 'sinners-to-repentance', title: 'Sinners To Repentance', artist: 'Crystal', metascore: 98, imageUrl: 'https://i.imgur.com/PaunpXh.jpeg', releaseDate: 'Oct 10, 2025', summary: 'Uma jornada sonora sobre redenção e queda.', criticReviewsCount: 30, userscore: 9.7, criticReviews: [] },
        { id: 'purple-moon', title: 'Purple Moon', artist: 'Luna Raven', metascore: 96, imageUrl: 'https://via.placeholder.com/200/8E44AD/FFFFFF?text=L', releaseDate: 'Oct 3, 2025', summary: 'Uma viagem psicodélica com sintetizadores etéreos.', criticReviewsCount: 28, userscore: 9.5, criticReviews: [] },
        { id: 'matangi', title: 'मातङ्गी Matangi', artist: 'Kayla Weng', metascore: 95, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=K', releaseDate: 'Sep 26, 2025', summary: 'Uma celebração da arte com influências globais.', criticReviewsCount: 25, userscore: 9.2, criticReviews: [] },
        { id: 'someone-like-you', title: 'Someone Like You', artist: 'Taylor Adkins', metascore: 94, imageUrl: 'https://via.placeholder.com/200/3498DB/FFFFFF?text=T', releaseDate: 'Sep 19, 2025', summary: 'Um retorno às raízes com baladas emocionantes.', criticReviewsCount: 22, userscore: 9.1, criticReviews: [] },
        { id: 'the-essence-of-robyn', title: 'The Essence Of Robyn', artist: 'Miss Fenty', metascore: 94, imageUrl: 'https://via.placeholder.com/200/E74C3C/FFFFFF?text=F', releaseDate: 'Sep 12, 2025', summary: 'Uma ode à icônica Robyn com um toque único ao synth-pop.', criticReviewsCount: 26, userscore: 9.3, criticReviews: [] },
        { id: 'ao-vivo-em-caucaia', title: 'Ao Vivo em Caucaia', artist: 'Nikita', metascore: 93, imageUrl: 'https://via.placeholder.com/200/2ECC71/FFFFFF?text=N', releaseDate: 'Sep 5, 2025', summary: 'A energia contagiante de um show ao vivo inesquecível.', criticReviewsCount: 15, userscore: 9.0, criticReviews: [] },
        { id: 'miss-solitude', title: 'Miss Solitude', artist: 'Crystal', metascore: 93, imageUrl: 'https://crystalonline.carrd.co/assets/images/image08.jpg?v=3811acd1', releaseDate: 'Aug 29, 2025', summary: 'Um álbum introspectivo que explora temas de solidão.', criticReviewsCount: 24, userscore: 9.4, criticReviews: [] },
        { id: 'collapsed-in-sunbeams', title: 'Collapsed In Sunbeams', artist: 'Miss Fenty', metascore: 92, imageUrl: 'https://via.placeholder.com/200/E74C3C/FFFFFF?text=F', releaseDate: 'Aug 22, 2025', summary: 'Poesia musicada com uma sonoridade suave e tocante.', criticReviewsCount: 27, userscore: 9.1, criticReviews: [] },
        { id: 'phantom-of-the-opera', title: 'The Phantom Of The Opera - Original Soundtrack', artist: 'Heather Moon', metascore: 92, imageUrl: 'https://i.imgur.com/EWctymn.jpeg', releaseDate: 'Aug 15, 2025', summary: 'A trilha sonora reimaginada para um clássico eterno.', criticReviewsCount: 18, userscore: 9.6, criticReviews: [] },
        { id: 'the-life-of-onika', title: 'The Life Of Onika', artist: 'Lil Barby', metascore: 92, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'Aug 8, 2025', summary: 'Um olhar autobiográfico sobre a vida e carreira da artista.', criticReviewsCount: 29, userscore: 9.2, criticReviews: [] },
        { id: 'the-odyssey', title: 'The Odyssey', artist: 'Heather Moon', metascore: 91, imageUrl: 'https://i.imgur.com/5SJmWOI.jpeg', releaseDate: 'Aug 1, 2025', summary: 'Uma jornada épica através de paisagens sonoras orquestrais.', criticReviewsCount: 22, userscore: 9.0, criticReviews: [] },
        { id: 'flowers-wilt-first', title: 'The Most Beautiful Flowers Wilts First', artist: 'Himiko', metascore: 91, imageUrl: 'https://via.placeholder.com/200/1ABC9C/FFFFFF?text=H', releaseDate: 'Jul 25, 2025', summary: 'Reflexões melancólicas sobre a beleza e a efemeridade.', criticReviewsCount: 20, userscore: 9.3, criticReviews: [] },
        { id: 'locomotive', title: 'Locomotive', artist: 'Taylor Adkins', metascore: 90, imageUrl: 'https://via.placeholder.com/200/3498DB/FFFFFF?text=T', releaseDate: 'Jul 18, 2025', summary: 'Um álbum de rock enérgico com riffs poderosos.', criticReviewsCount: 19, userscore: 8.9, criticReviews: [] },
        { id: 'miseducation-of-abel', title: 'The Miseducation Of Abel', artist: 'The Ocean', metascore: 90, imageUrl: 'https://via.placeholder.com/200/34495E/FFFFFF?text=O', releaseDate: 'Jul 11, 2025', summary: 'Uma obra de soul moderno que explora amor e sociedade.', criticReviewsCount: 25, userscore: 9.5, criticReviews: [] },
        { id: 'boyz-n-the-hood', title: 'Boyz N The Hood - Original Soundtrack', artist: 'Various Artist', metascore: 89, imageUrl: 'https://via.placeholder.com/200/000000/FFFFFF?text=VA', releaseDate: 'Jul 4, 2025', summary: 'A trilha sonora que definiu uma geração do hip-hop.', criticReviewsCount: 15, userscore: 9.1, criticReviews: [] },
        { id: 'dancing-in-moonlight', title: 'Dancing in the Moonlight', artist: 'Scarlett', metascore: 89, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=S', releaseDate: 'Jun 27, 2025', summary: 'Um álbum pop dançante e otimista.', criticReviewsCount: 18, userscore: 8.8, criticReviews: [] },
        { id: 'erotic', title: 'EROTIC', artist: 'Slayyyter', metascore: 89, imageUrl: 'https://via.placeholder.com/200/E91E63/FFFFFF?text=S', releaseDate: 'Jun 20, 2025', summary: 'Hyperpop provocante e irresistivelmente cativante.', criticReviewsCount: 17, userscore: 8.9, criticReviews: [] },
        { id: 'the-witch', title: 'The Witch', artist: 'Clarke', metascore: 89, imageUrl: 'https://via.placeholder.com/200/2C3E50/FFFFFF?text=C', releaseDate: 'Jun 13, 2025', summary: 'Um álbum conceitual sombrio e atmosférico.', criticReviewsCount: 21, userscore: 9.0, criticReviews: [] },
        { id: 'la-nuit', title: 'La Nuit', artist: 'Lana Olsen', metascore: 89, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=L', releaseDate: 'Jun 6, 2025', summary: 'Canções noturnas com uma estética cinematográfica e sonhadora.', criticReviewsCount: 19, userscore: 9.2, criticReviews: [] },
        { id: 'et-timor-devoravit-cor-meum', title: 'Et Timor Devoravit Cor Meum', artist: 'Vitaliy Vitas Vittar', metascore: 88, imageUrl: 'https://via.placeholder.com/200/1ABC9C/FFFFFF?text=V', releaseDate: 'May 30, 2025', summary: 'Intensidade e drama em composições sinfônicas.', criticReviewsCount: 17, userscore: 8.7, criticReviews: [] },
        { id: 'strangers-by-nature', title: 'Strangers By Nature', artist: 'Lana Olsen', metascore: 88, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=L', releaseDate: 'May 23, 2025', summary: 'Canções etéreas sobre encontros e desencontros.', criticReviewsCount: 18, userscore: 8.8, criticReviews: [] },
        { id: 'sunrise', title: 'Sunrise', artist: 'Slayyyter', metascore: 88, imageUrl: 'https://via.placeholder.com/200/E91E63/FFFFFF?text=S', releaseDate: 'May 16, 2025', summary: 'Um álbum vibrante de pop moderno.', criticReviewsCount: 16, userscore: 8.9, criticReviews: [] },
        { id: 'aphrodisiac-seafaring', title: 'Aphrodisiac Seafaring', artist: 'Lilith', metascore: 87, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'May 9, 2025', summary: 'Explorações sonoras sensuais e atmosféricas.', criticReviewsCount: 15, userscore: 8.7, criticReviews: [] },
        { id: 'born-this-way', title: 'Born This Way', artist: 'Crystal', metascore: 87, imageUrl: 'https://crystalonline.carrd.co/assets/images/image07.jpg?v=3811acd1', releaseDate: 'May 2, 2025', summary: 'Empoderamento e identidade em um álbum pop ousado.', criticReviewsCount: 22, userscore: 8.9, criticReviews: [] },
        { id: 'lembrancas', title: 'Lembranças', artist: 'Eva Camargo', metascore: 87, imageUrl: 'https://via.placeholder.com/200/2ECC71/FFFFFF?text=E', releaseDate: 'Apr 25, 2025', summary: 'Recordações afetivas com arranjos delicados.', criticReviewsCount: 18, userscore: 8.8, criticReviews: [] },
        { id: 'season-of-love', title: 'Season Of Love', artist: 'Slayyyter', metascore: 87, imageUrl: 'https://via.placeholder.com/200/E91E63/FFFFFF?text=S', releaseDate: 'Apr 18, 2025', summary: 'Canções de amor vibrantes e pop.', criticReviewsCount: 14, userscore: 8.7, criticReviews: [] },
        { id: 'ungodly-hour', title: 'Ungodly Hour', artist: 'Destiny’s', metascore: 87, imageUrl: 'https://via.placeholder.com/200/34495E/FFFFFF?text=D', releaseDate: 'Apr 11, 2025', summary: 'R&B contemporâneo com intensidade emocional.', criticReviewsCount: 16, userscore: 8.9, criticReviews: [] },
        { id: 'warmly-love', title: 'Warmly Love', artist: 'HONEY', metascore: 87, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=H', releaseDate: 'Apr 4, 2025', summary: 'Pop romântico com produção elegante.', criticReviewsCount: 15, userscore: 8.8, criticReviews: [] },
        { id: 'winter-flower', title: 'Winter Flower', artist: 'Mirian', metascore: 87, imageUrl: 'https://via.placeholder.com/200/1ABC9C/FFFFFF?text=M', releaseDate: 'Mar 28, 2025', summary: 'Baladas introspectivas e melancólicas.', criticReviewsCount: 14, userscore: 8.9, criticReviews: [] },
        { id: 'amor-pasajero', title: 'Amor Pasajero', artist: 'Sebastian', metascore: 86, imageUrl: 'https://via.placeholder.com/200/2ECC71/FFFFFF?text=S', releaseDate: 'Mar 21, 2025', summary: 'Romance efêmero com elementos latinos.', criticReviewsCount: 13, userscore: 8.6, criticReviews: [] },
        { id: 'elegant-heart', title: 'Elegant Heart', artist: 'HONEY', metascore: 86, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=H', releaseDate: 'Mar 14, 2025', summary: 'Produção pop refinada e romântica.', criticReviewsCount: 12, userscore: 8.7, criticReviews: [] },
        { id: 'joan-of-arc-on-the-dance-floor', title: 'Joan of Arc on the Dance Floor', artist: 'Scarlett', metascore: 86, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=S', releaseDate: 'Mar 7, 2025', summary: 'Uma fusão de história e dance pop moderna.', criticReviewsCount: 13, userscore: 8.6, criticReviews: [] },
        { id: 'nightmare', title: 'Nightmare', artist: 'Luna Raven', metascore: 86, imageUrl: 'https://via.placeholder.com/200/8E44AD/FFFFFF?text=L', releaseDate: 'Feb 28, 2025', summary: 'Sombras e tensões em arranjos eletrônicos.', criticReviewsCount: 11, userscore: 8.7, criticReviews: [] },
        { id: 'same-old-love', title: 'Same Old Love', artist: 'Taylor Adkins', metascore: 86, imageUrl: 'https://via.placeholder.com/200/3498DB/FFFFFF?text=T', releaseDate: 'Feb 21, 2025', summary: 'Pop contemporâneo explorando relacionamentos.', criticReviewsCount: 12, userscore: 8.6, criticReviews: [] },
        { id: 'carnival-avenue', title: 'Carnival Avenue', artist: 'Eva Camargo', metascore: 86, imageUrl: 'https://via.placeholder.com/200/2ECC71/FFFFFF?text=E', releaseDate: 'Feb 14, 2025', summary: 'Ritmos alegres e tropicais.', criticReviewsCount: 10, userscore: 8.7, criticReviews: [] },
        { id: 'dancing-with-sayuri', title: 'Dancing With Sayuri', artist: 'Sayuri', metascore: 86, imageUrl: 'https://via.placeholder.com/200/9B59B6/FFFFFF?text=S', releaseDate: 'Feb 7, 2025', summary: 'Dance pop com influências japonesas.', criticReviewsCount: 11, userscore: 8.6, criticReviews: [] },
        { id: '7-jikei-jackson-himiko', title: '7 Jikei! Jackson! Himiko!', artist: 'Jimiko', metascore: 85, imageUrl: 'https://via.placeholder.com/200/1ABC9C/FFFFFF?text=J', releaseDate: 'Jan 31, 2025', summary: 'Pop animado e energético.', criticReviewsCount: 10, userscore: 8.5, criticReviews: [] },
        { id: 'chatoyant-into-nefarious', title: 'chatoyant into the nefarious from the sorrow until the idyllic way of behave', artist: 'Luna Raven', metascore: 85, imageUrl: 'https://via.placeholder.com/200/8E44AD/FFFFFF?text=L', releaseDate: 'Jan 24, 2025', summary: 'Exploração lírica e musical complexa.', criticReviewsCount: 12, userscore: 8.5, criticReviews: [] },
        { id: 'farewall', title: 'Farewall', artist: 'Clarke', metascore: 85, imageUrl: 'https://via.placeholder.com/200/2C3E50/FFFFFF?text=C', releaseDate: 'Jan 17, 2025', summary: 'Baladas dramáticas e intensas.', criticReviewsCount: 11, userscore: 8.5, criticReviews: [] },
        { id: 'lady-killer', title: 'Lady Killer', artist: 'Crystal', metascore: 85, imageUrl: 'https://crystalonline.carrd.co/assets/images/image03.jpg?v=3811acd1', releaseDate: 'Jan 10, 2025', summary: 'Pop ousado com atitude e charme.', criticReviewsCount: 13, userscore: 8.5, criticReviews: [] },
        { id: 'madworld', title: 'MADWORLD.', artist: 'J. Rocky', metascore: 85, imageUrl: 'https://via.placeholder.com/200/34495E/FFFFFF?text=J', releaseDate: 'Jan 3, 2025', summary: 'Mistura de rock alternativo e pop.', criticReviewsCount: 10, userscore: 8.5, criticReviews: [] },
        { id: 'ode-to-joy', title: 'Ode To Joy', artist: 'Tiffany Lee', metascore: 85, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=T', releaseDate: 'Dec 27, 2024', summary: 'Pop otimista com toques clássicos.', criticReviewsCount: 12, userscore: 8.5, criticReviews: [] },
        { id: 'talking-to-the-moon', title: 'Talking To The Moon', artist: 'Andrew Malik', metascore: 85, imageUrl: 'https://via.placeholder.com/200/9B59B6/FFFFFF?text=A', releaseDate: 'Dec 20, 2024', summary: 'Baladas reflexivas com produção moderna.', criticReviewsCount: 11, userscore: 8.5, criticReviews: [] },
        { id: 'temnota', title: 'темнота', artist: 'Luna Raven', metascore: 85, imageUrl: 'https://via.placeholder.com/200/8E44AD/FFFFFF?text=L', releaseDate: 'Dec 13, 2024', summary: 'Sombras e atmosferas densas.', criticReviewsCount: 10, userscore: 8.5, criticReviews: [] },
        { id: 'true-sunamio', title: 'TRUE SUNAMIO', artist: 'Sunamioland', metascore: 85, imageUrl: 'https://via.placeholder.com/200/777777/FFFFFF?text=S', releaseDate: 'Dec 6, 2024', summary: 'Homenagem ao universo Sunamio.', criticReviewsCount: 12, userscore: 8.5, criticReviews: [] },
        { id: 'bdsm', title: 'BDSM', artist: 'Slayyyter', metascore: 85, imageUrl: 'https://via.placeholder.com/200/E91E63/FFFFFF?text=S', releaseDate: 'Nov 29, 2024', summary: 'Hyperpop provocante e ousado.', criticReviewsCount: 11, userscore: 8.5, criticReviews: [] },
        { id: 'daylight', title: 'Daylight', artist: 'Lana Olsen', metascore: 84, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'guatauba', title: 'Guatauba', artist: 'Papi Chulo', metascore: 84, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=P', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'hey-lord', title: 'Hey, Lord', artist: 'Timmo', metascore: 84, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=T', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'hollywood-girl', title: 'Hollywood Girl', artist: 'Crystal', metascore: 84, imageUrl: 'https://crystalonline.carrd.co/assets/images/image02.jpg?v=3811acd1', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'latina', title: 'LaTina', artist: 'La Tina', metascore: 84, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'liberation', title: 'Liberation', artist: 'Scarlett', metascore: 84, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=S', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'melancholy', title: 'Melancholy', artist: 'Luna Raven', metascore: 84, imageUrl: 'https://via.placeholder.com/200/8E44AD/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'philosophy-no-dance', title: 'Philosophy No Dance', artist: 'Himiko', metascore: 84, imageUrl: 'https://via.placeholder.com/200/1ABC9C/FFFFFF?text=H', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'revive', title: 'REVIVE', artist: 'GIÆH', metascore: 84, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=G', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
        { id: 'woman', title: 'Woman', artist: 'Mirian', metascore: 84, imageUrl: 'https://via.placeholder.com/200/1ABC9C/FFFFFF?text=M', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
   // Álbuns adicionados (de 84 para baixo)

  { id: 'ae', title: 'Æ', artist: 'GIÆH', metascore: 83, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=G', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'black-is-queen', title: 'Black Is Queen', artist: 'Yancé', metascore: 83, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=Y', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'darkness-lies', title: 'Darkness Lies', artist: 'Hanna', metascore: 83, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=H', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'desejo-prohibido', title: 'Desejo Prohibido', artist: 'CHIARA', metascore: 83, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'diary-of-a-broken-heart', title: 'Diary Of A Broken Heart', artist: 'Mitsuki', metascore: 83, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=M', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'dreams', title: 'Dreams', artist: 'CHIARA', metascore: 83, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'moonlight', title: 'moonlight', artist: 'Lilith', metascore: 83, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'stop', title: 'Stop', artist: 'Mary', metascore: 83, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=M', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'minha-congregacao', title: 'Minha Congregação', artist: 'Hadassa Nissim', metascore: 82, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=H', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'afterglow', title: 'Afterglow', artist: 'Scarlett', metascore: 82, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=S', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'bonheur', title: 'Bonheur', artist: 'Clarke', metascore: 82, imageUrl: 'https://via.placeholder.com/200/2C3E50/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'looking-for-money', title: 'Looking For Money', artist: 'Lil Barby', metascore: 82, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'war-zone', title: 'WAR ZONE', artist: 'Andrew Malik', metascore: 82, imageUrl: 'https://via.placeholder.com/200/9B59B6/FFFFFF?text=A', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'genesis', title: 'Genesis', artist: 'CAYM', metascore: 81, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'lonerism', title: 'Lonerism', artist: 'Clarke', metascore: 81, imageUrl: 'https://via.placeholder.com/200/2C3E50/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'route-sunamio', title: 'ROUTE SUNAMIO', artist: 'Sunamioland', metascore: 81, imageUrl: 'https://via.placeholder.com/200/34495E/FFFFFF?text=S', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'the-best-of-me', title: 'The Best Of Me', artist: 'Sayuri', metascore: 81, imageUrl: 'https://via.placeholder.com/200/9B59B6/FFFFFF?text=S', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'darkest-hour', title: 'darkest hour comes before your dawn', artist: 'Lil Barby', metascore: 81, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'the-hunger-games', title: 'The Hunger Games', artist: 'Various Artist', metascore: 81, imageUrl: 'https://via.placeholder.com/200/000000/FFFFFF?text=VA', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'bad-news', title: 'Bad News', artist: 'Mary', metascore: 80, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=M', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'kalika-kali', title: 'कालिका Kali', artist: 'Kayla Weng', metascore: 80, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=K', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'coroa-de-vitoria', title: 'Coroa de Vitória', artist: 'Quéren Hapuque', metascore: 80, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=Q', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'cherry-bomb', title: 'Cherry Bomb', artist: 'CHILLI', metascore: 80, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'fogo-santo', title: 'Fogo Santo', artist: 'Quéren Hapuque', metascore: 80, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=Q', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'circus-1-carnival', title: 'CIRCUS 1: Carnival', artist: 'CIRCUS', metascore: 79, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'dazed-confused', title: 'Dazed & Confused', artist: 'Andrew Malik', metascore: 79, imageUrl: 'https://via.placeholder.com/200/9B59B6/FFFFFF?text=A', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'far-too-young-to-die', title: 'Far Too Young To Die', artist: 'Andrew Malik', metascore: 79, imageUrl: 'https://via.placeholder.com/200/9B59B6/FFFFFF?text=A', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'love-language', title: 'Love Language', artist: 'Mirian', metascore: 79, imageUrl: 'https://via.placeholder.com/200/1ABC9C/FFFFFF?text=M', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'pink-sugar', title: 'Pink Sugar', artist: 'Farrah', metascore: 78, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=F', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'someone-you-loved', title: 'Someone You Loved', artist: 'Andrew Malik', metascore: 78, imageUrl: 'https://via.placeholder.com/200/9B59B6/FFFFFF?text=A', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'broken-hearts', title: 'Broken Hearts', artist: 'Clarke & Crystal', metascore: 77, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=CC', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'prayer-factory', title: 'Prayer Factory', artist: 'Heather Moon', metascore: 77, imageUrl: 'https://i.imgur.com/AaMahhN.jpeg', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'sexercize', title: 'Sexercize', artist: 'Raven Reyes', metascore: 77, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=R', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'the-edge-of-glory', title: 'The Edge Of Glory', artist: 'Dominic', metascore: 77, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=D', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'eden', title: 'Eden', artist: 'Lilith', metascore: 76, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'nightfall', title: 'Nightfall', artist: 'Scarlett', metascore: 76, imageUrl: 'https://via.placeholder.com/200/F1C40F/000000?text=S', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'paradise', title: 'Paradise', artist: 'Lilith', metascore: 76, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'gata-bellaka', title: 'Gata Bellaka', artist: 'Britney Klein', metascore: 75, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=B', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'girls-world', title: 'Girls World', artist: 'Chilli', metascore: 75, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'royal', title: 'Royal', artist: 'Royalty', metascore: 75, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=R', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'colheita-final', title: 'Colheita Final', artist: 'Hadassa Nissim', metascore: 74, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=H', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'aged-new-love', title: 'Aged New Love', artist: 'CREAM', metascore: 74, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'sex-talk', title: 'Sex Talk', artist: 'Lil Barby', metascore: 74, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'starboy', title: 'Starboy', artist: 'The Ocean', metascore: 74, imageUrl: 'https://via.placeholder.com/200/34495E/FFFFFF?text=O', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'ao-vivo-em-ananindeua', title: 'Ao Vivo Em Ananindeua', artist: 'Nikita', metascore: 73, imageUrl: 'https://via.placeholder.com/200/2ECC71/FFFFFF?text=N', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'half-sleep', title: '半睡半醒 - Half-Sleep', artist: 'Audrey Noe', metascore: 73, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=A', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'l-o-v-e', title: 'L-O-V-E', artist: '9MUSES', metascore: 73, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=9', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'on-the-road', title: 'On The Road', artist: 'Dixies', metascore: 73, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=D', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'hard-feelings-loveless', title: 'Hard Feelings / Loveless', artist: 'Bjökas', metascore: 71, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=B', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'symbol-album', title: '⌿⍀⌿⍀⌿⍀⌿⍀⌿⍀', artist: 'EarlXX', metascore: 70, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=E', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'ocean-eyes', title: 'Ocean Eyes', artist: 'Edward Peter', metascore: 70, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=E', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'focus', title: 'Focus', artist: 'CHIARA', metascore: 69, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'this-kiss', title: 'This Kiss', artist: 'Chloe Hazel', metascore: 69, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'supernatural-girl', title: 'SUPERNATURAL GIRL', artist: 'Madison Baby', metascore: 66, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=M', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'thug-life', title: 'Thug Life', artist: 'Big Don', metascore: 66, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=B', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'christmas-wishes', title: 'Christmas Wishes', artist: 'Lilith', metascore: 64, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'dive', title: 'DIVE', artist: 'GIÆH', metascore: 64, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=G', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'xxii-aexl', title: 'XXII-AEXL', artist: 'GIÆH', metascore: 63, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=G', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'welcome-to-sunamioland', title: 'Welcome To Sunamioland', artist: 'Sunamioland', metascore: 62, imageUrl: 'https://via.placeholder.com/200/34495E/FFFFFF?text=S', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'naturaleza', title: 'Naturaleza', artist: 'Sebástian', metascore: 61, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=S', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'fun-love', title: 'Fun&Love', artist: '9MUSES', metascore: 60, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=9', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'cameo', title: 'CAMEO', artist: 'LUXSPY', metascore: 58, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'im-drowning', title: 'I\'m Drowning In Your Grace', artist: 'Emma McCoy', metascore: 58, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=E', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'umbrage', title: 'Umbrage', artist: 'Luna Raven', metascore: 57, imageUrl: 'https://via.placeholder.com/200/8E44AD/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'broken-mind', title: 'BROKEN MIND', artist: 'Krys', metascore: 56, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=K', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'original-doll', title: 'Original Doll', artist: 'Chiara', metascore: 56, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'break-free', title: 'Break Free', artist: 'Lilith', metascore: 55, imageUrl: 'https://via.placeholder.com/200/F39C12/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'girl-from-triquini', title: 'Girl From Triquini', artist: 'Joggodo Bi$ho', metascore: 55, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=J', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'mtv-unplugged', title: 'MTV Unplugged', artist: 'CHIARA', metascore: 54, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'rated-r', title: 'Rated R', artist: 'Miss Fenty', metascore: 54, imageUrl: 'https://via.placeholder.com/200/E74C3C/FFFFFF?text=F', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'make-your-moment', title: 'Make Your; MOMENT', artist: 'LUXSPY', metascore: 53, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=L', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'symphonies-of-apocalypse', title: 'The Symphonies Of The Apocalypse', artist: 'CAYM', metascore: 51, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=C', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'tt', title: 'TT', artist: '9MUSES', metascore: 39, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=9', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'mariposa', title: 'Mariposa', artist: 'Britney Klein', metascore: 38, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=B', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'pop-bitch-y2k', title: 'Pop Bitch Y2K', artist: 'Fairy', metascore: 35, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=F', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] },
  { id: 'teen-drama', title: 'Teen Drama', artist: 'Bella', metascore: 22, imageUrl: 'https://via.placeholder.com/200/95A5A6/FFFFFF?text=B', releaseDate: 'N/A', summary: 'Summary not available.', criticReviewsCount: 0, userscore: 0.0, criticReviews: [] }
];
    
    // =================================================================
    //  DADOS DAS CRÍTICAS - ADICIONE AQUI
    // =================================================================
    const CriticasGrandes = [
        { albumId: 'sinners-to-repentance', publication: 'Pop Divas Magazine', score: 100, reviewText: 'Uma obra-prima impecável. Crystal redefine o que é possível na música pop.' },
        { albumId: 'purple-moon', publication: 'The Music Journal', score: 95, reviewText: 'Um som de outro mundo. Luna Raven cria uma atmosfera que é totalmente sua, onde cada nota, cada batida e cada nuance vocal transporta o ouvinte para uma dimensão diferente. Desde a primeira faixa, percebe-se uma identidade sonora única, uma assinatura que mistura elementos de mistério, intensidade e sensibilidade de uma forma que poucas artistas conseguem. A maneira como ela trabalha a dinâmica entre silêncio e explosão sonora demonstra maturidade e um domínio absoluto da produção musical. '},
    ];
    
    // =================================================================
    // O restante do seu código JS começa aqui
    // =================================================================
    const homeView = document.getElementById('home-view');
    const detailsView = document.getElementById('details-view');
    const featuredContainer = document.getElementById('featured-releases');
    const moreContainer = document.getElementById('more-releases');
    const detailsContent = document.getElementById('album-details-content');
    const searchInput = document.getElementById('search-input');
    const backButton = document.getElementById('back-button');
    const mainColHeader = document.querySelector('.main-col .section-header');
    const clearFilterButton = document.getElementById('clear-filter-button');
    const takePictureButton = document.getElementById('take-picture-button');

    function getScoreClass(score) {
        if (score === null || score === undefined) return 'tbd';
        if (score >= 75) return 'positive';
        if (score >= 50) return 'mixed';
        return 'negative';
    }
    
    function renderHomePage(albums) {
        featuredContainer.innerHTML = '';
        moreContainer.innerHTML = '';
        
        const sortedByScore = [...albums].sort((a, b) => b.metascore - a.metascore);
        const featuredAlbums = sortedByScore.slice(0, 10);
        const moreAlbums = sortedByScore.slice(10);

        if (featuredAlbums.length === 0) {
            featuredContainer.innerHTML = '<p>No albums found.</p>';
        }

        featuredAlbums.forEach(album => {
            const card = document.createElement('div');
            card.className = 'featured-album-card';
            const metascoreClass = getScoreClass(album.metascore);
            card.innerHTML = `
                <div class="album-cover-link" data-album-id="${album.id}">
                    <img src="${album.imageUrl}" alt="${album.title}">
                    <div class="album-title">${album.title}</div>
                </div>
                <a href="#" class="artist-name" data-artist="${album.artist}">${album.artist}</a>
                <div class="metascore ${metascoreClass}">${album.metascore}</div>
            `;
            featuredContainer.appendChild(card);
        });

        moreAlbums.forEach(album => {
            const item = document.createElement('div');
            item.className = 'release-item';
            item.setAttribute('data-album-id', album.id);
            const metascoreClass = getScoreClass(album.metascore);
            item.innerHTML = `
                <div class="metascore small ${metascoreClass}">${album.metascore}</div>
                <div class="release-info">
                    <div class="release-title">${album.title}</div>
                    <a href="#" class="release-artist" data-artist="${album.artist}">${album.artist}</a>
                </div>
            `;
            moreContainer.appendChild(item);
        });
    }

    function showDetailsPage(albumId) {
        const album = albumsData.find(a => a.id === albumId);
        if (!album) return;

        const albumReviews = CriticasGrandes.filter(r => r.albumId === albumId);
        
        let criticsHtml = '';
        albumReviews.forEach(r => {
            criticsHtml += `
                <li class="review critic_review">
                    <div class="review-grade">
                        <div class="metascore ${getScoreClass(r.score)}">${r.score}</div>
                    </div>
                    <div class="review-body">
                        <div class="review-critic">
                            <span class="source">${r.publication}</span>
                        </div>
                        ${r.reviewText}
                    </div>
                </li>
            `;
        });
        
        const metascoreClass = getScoreClass(album.metascore);
        
        detailsContent.innerHTML = `
            <div class="details-product-summary">
                <img src="${album.imageUrl}" alt="${album.title}" class="details-cover">
                <div class="details-info">
                    <h2 class="album-title">${album.title}</h2>
                    <p class="album-artist">by <a href="#" class="artist-link" data-artist="${album.artist}">${album.artist}</a></p>
                    <p class="release-date"><strong>Release Date:</strong> ${album.releaseDate}</p>
                    <div class="details-scores">
                        <div class="score-box">
                            <div class="score-label">Metascore</div>
                            <div class="metascore large ${metascoreClass}">${album.metascore}</div>
                            <p>Based on<br>${album.criticReviewsCount} Critic Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="module critic_reviews_module">
                <div class="section-header">Critic Reviews</div>
                <ol class="reviews critic_reviews">${criticsHtml || '<p style="padding: 15px 0;">No critic reviews available yet.</p>'}</ol>
            </div>
        `;
        
        homeView.style.display = 'none';
        detailsView.style.display = 'block';
        window.scrollTo(0, 0);
    }
    
    function showArtistPage(artistName) {
        const artistAlbums = albumsData.filter(album => album.artist === artistName);
        mainColHeader.textContent = `All Releases by ${artistName}`;
        renderHomePage(artistAlbums);
        
        detailsView.style.display = 'none';
        homeView.style.display = 'block';
        searchInput.value = '';
        clearFilterButton.style.display = 'inline-block';
        takePictureButton.style.display = 'inline-block';
        window.scrollTo(0, 0);
    }
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        mainColHeader.textContent = 'Most Acclaimed'; 
        clearFilterButton.style.display = 'none';
        takePictureButton.style.display = 'none';
        const filteredAlbums = albumsData.filter(album => 
            album.title.toLowerCase().includes(query) || 
            album.artist.toLowerCase().includes(query)
        );
        renderHomePage(filteredAlbums);
    });

    backButton.addEventListener('click', () => {
        detailsView.style.display = 'none';
        homeView.style.display = 'block';
        searchInput.value = '';
        mainColHeader.textContent = 'Most Acclaimed';
        clearFilterButton.style.display = 'none';
        takePictureButton.style.display = 'none';
        renderHomePage(albumsData);
    });
    
    clearFilterButton.addEventListener('click', () => {
        clearFilterButton.style.display = 'none';
        takePictureButton.style.display = 'none';
        mainColHeader.textContent = 'Most Acclaimed';
        searchInput.value = '';
        renderHomePage(albumsData);
    });

    takePictureButton.addEventListener('click', () => {
        clearFilterButton.style.display = 'none';
        takePictureButton.style.display = 'none';
        
        html2canvas(document.querySelector('.content-area'), {
            useCORS: true,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'artist-releases.png';
            link.href = canvas.toDataURL('image/png');
            link.click();

            clearFilterButton.style.display = 'inline-block';
            takePictureButton.style.display = 'inline-block';
        });
    });

    document.querySelector('.metacritic-wrapper').addEventListener('click', function(e) {
        const artistLink = e.target.closest('[data-artist]');
        if (artistLink) {
            e.preventDefault();
            const artistName = artistLink.dataset.artist;
            showArtistPage(artistName);
            return;
        }

        const albumCard = e.target.closest('[data-album-id]');
        if (albumCard) {
            e.preventDefault();
            const albumId = albumCard.dataset.albumId;
            showDetailsPage(albumId);
            return;
        }
    });

    renderHomePage(albumsData);
});
