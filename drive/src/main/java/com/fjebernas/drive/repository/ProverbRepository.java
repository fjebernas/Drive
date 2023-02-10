package com.fjebernas.drive.repository;

import com.fjebernas.drive.model.Proverb;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProverbRepository extends JpaRepository<Proverb, Long> {

  boolean existsProverbByContent(String content);

}
