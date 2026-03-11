package com.library.book_registry.repository;

import com.library.book_registry.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByAuthor(String author);

    List<Book> findByGenre(String genre);

    List<Book> findByAuthorAndGenre(String author, String genre);
}