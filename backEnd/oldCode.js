// // route for save a new book
// app.post('/books', async (request, response) => {
//     try {
//       if (
//         !request.body.title ||
//         !request.body.author ||
//         !request.body.publishYear
//       ) {
//         return response.status(400).send({
//           message: 'Send required fieled: title, author, publishYear',
//         });
//       }
//       const newBook = {
//         title: request.body.title,
//         author: request.body.author,
//         publishYear: request.body.publishYear,
//       };

//       const book = await Book.create(newBook);

//       return response.status(201).send(book);
//     } catch (error) {
//       console.log(error.message);
//       response.status(500).send({ message: error.message });
//     }
//   });

//   //Route for Get all Books from database
//   app.get('/books', async (request, response) => {
//     try {
//       const books = await Book.find({});

//       return response.status(200).json({
//         count: books.length,
//         data: books,
//       });
//     } catch (error) {
//       console.log(error);
//       response.status(500).send({ message: error.message });
//     }
//   });

//   //Route for Get one Book from database by id
//   app.get('/books/:id', async (request, response) => {
//     try {
//       const { id } = request.params;
//       const book = await Book.findById(id);

//       return response.status(200).json(book);
//     } catch (error) {
//       console.log(error);
//       response.status(500).send({ message: error.message });
//     }
//   });

//   // Route to update a Book in the database
//   app.put('/books/:id', async (request, response) => {
//     try {
//       if (
//         !request.body.title ||
//         !request.body.author ||
//         !request.body.publishYear
//       ) {
//         return response.status(400).send({
//           message: 'Send required fieled: title, author, publishYear',
//         });
//       }

//       const { id } = request.params;

//       const result = await Book.findByIdAndUpdate(id, request.body);

//       if (!result) {
//         console.log('maybe');
//         return response.status(404).json({ message: 'Book not found' });
//       }

//       return response.status(200).send({ message: 'Book updated successfully' });
//     } catch (error) {
//       console.log(error);
//       response.status(500).send({ message: error.message });
//     }
//   });

//   app.delete('/books/:id', async (request, response) => {
//     try {
//       const { id } = request.params;
//       const result = await Book.findByIdAndDelete(id);
//       if (!result) {
//         return response.status(404).json({ message: 'Book not found' });
//       }
//       return response.status(200).send({ message: 'Book deleted successfully' });
//     } catch (error) {
//       console.log(error);
//       response.status(500).send({ message: error.message });
//     }
//   });
